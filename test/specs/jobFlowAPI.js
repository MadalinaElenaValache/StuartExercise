const stuartAPI = require('../helpers/stuartAPI');
const { v4: uuidv4 } = require('uuid');
const chai = require('chai')
const assert = chai.assert;
const expect = chai.expect;
 
describe('Create, view and cancel job - /v2/jobs API', () => {

    var jobId;
    var jobPostPayload;

    before(async function(){
        await stuartAPI.apiLogin();
    })

    it('POST - should create a new job', async() => {
        var orderId = uuidv4();
        jobPostPayload = stuartAPI.getJob1(orderId);
        var response = await stuartAPI.postJob(jobPostPayload);
        var responseContent = JSON.parse(response.text);
        jobId = responseContent.id;

        assert.equal(response.statusCode, 201);
        expect(jobId).to.be.a('number');
        assert.equal(responseContent.assignment_code, jobPostPayload.job.assignment_code);
        
        const firstPickupResponse = responseContent.deliveries[0].pickup;
        const pickupContactDetailsResponse = firstPickupResponse.contact;

        const firstPickupPayload = jobPostPayload.job.pickups[0];
        const pickupContactDetailsPayload = firstPickupPayload.contact;

        // Validate pickups details
        assert.equal(firstPickupResponse.comment, firstPickupPayload.comment);
        assert.equal(pickupContactDetailsResponse.firstname, pickupContactDetailsPayload.firstname);
        assert.equal(pickupContactDetailsResponse.lastname, pickupContactDetailsPayload.lastname);
        assert.equal(pickupContactDetailsResponse.phone, pickupContactDetailsPayload.phone);
        assert.equal(pickupContactDetailsResponse.email, pickupContactDetailsPayload.email);
        assert.equal(pickupContactDetailsResponse.company_name, pickupContactDetailsPayload.company);

        const firstDeliverieResponse = responseContent.deliveries[0];
        const firstDropoffResponse = firstDeliverieResponse.dropoff;
        const dropoffContactDetailsResponse = firstDropoffResponse.contact;

        const firstDropoffPayload = jobPostPayload.job.dropoffs[0];
        const dropoffContactDetailsPayload = firstDropoffPayload.contact;

        // Validate dropoffs details
        assert.equal(responseContent.package_type, firstDropoffPayload.package_type);
        assert.equal(firstDeliverieResponse.package_description, firstDropoffPayload.package_description);
        assert.equal(firstDeliverieResponse.client_reference, firstDropoffPayload.client_reference);
        assert.equal(firstDropoffResponse.comment, firstDropoffPayload.comment);
        assert.equal(dropoffContactDetailsResponse.firstname, dropoffContactDetailsPayload.firstname);
        assert.equal(dropoffContactDetailsResponse.lastname, dropoffContactDetailsPayload.lastname);
        assert.equal(dropoffContactDetailsResponse.phone, dropoffContactDetailsPayload.phone);
        assert.equal(dropoffContactDetailsResponse.email, dropoffContactDetailsPayload.email);
        assert.equal(dropoffContactDetailsResponse.company_name, dropoffContactDetailsPayload.company);
    });

    it('GET - should return created job', async() => {
        var response = await stuartAPI.getJobById(jobId);
        assert.equal(response.statusCode, 200);

        var responseContent = JSON.parse(response.text);

        assert.equal(responseContent.id, jobId);
        assert.equal(responseContent.assignment_code, jobPostPayload.job.assignment_code);
    });

    it('POST /cancel - should cancel created job', async() => {
        var response = await stuartAPI.cancelJob(jobId);
        assert.equal(response.statusCode, 204);
    });
});