var chai = require('chai'), chaiHttp = require('chai-http');
var config = require('./config.json');
var job1 = require('../../job_data/job1');

chai.use(chaiHttp);

class StuartAPI {

    getJob1(orderId) {
        return job1(orderId);
    }

    async apiLogin() {
        var requestResponse = await chai.request(config.API_URL)
            .post("/oauth/token?client_id=" + config.CLIENT_ID + "&client_secret=" + config.CLIENT_SECRET + "&grant_type=client_credentials&scope=api")

        var response = JSON.parse(requestResponse.text);
        return response.access_token;
    }

    async getJobListing() {
        var requestResponse = await chai.request(config.API_URL)
            .get('/v2/jobs')
            .set({ "Authorization": "Bearer " + await this.apiLogin()})

        var response = JSON.parse(requestResponse.text);
        return response;
    }

    async getJobById(jobId) {
        var requestResponse = await chai.request(config.API_URL)
            .get('/v2/jobs/' + jobId)
            .set({ "Authorization": "Bearer " + await this.apiLogin()})

        return requestResponse;
    }

    async postJob(job) {        
        var requestResponse = await chai.request(config.API_URL)
        .post('/v2/jobs')
        .set('content-type', 'application/json')
        .set({ "Authorization": "Bearer " + await this.apiLogin()})
        .send(job);

        return requestResponse;
    }

    async cancelJob(jobId) {
        var requestResponse = await chai.request(config.API_URL)
        .post('/v2/jobs/' + jobId + "/cancel") 
        .set({ "Authorization": "Bearer " + await this.apiLogin()})
       
        return requestResponse;
    }
}

module.exports = new StuartAPI();