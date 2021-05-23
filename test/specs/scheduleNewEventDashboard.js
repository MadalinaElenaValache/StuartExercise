const LoginPage = require('../pageobjects/login.page');
const RequestDeliveryPage = require('../pageobjects/request.delivery.page');
const ScheduledPage = require('../pageobjects/scheduled.page');

const config = require('../helpers/config.json');
const strings = require('../helpers/strings.json');

const chai = require('chai')
const assert = chai.assert;
const expect = chai.expect;

describe('Schedule job flow - dashboard', () => {

    var choosedDropOfAddress;
    var choosedPickUpAddress;
    var scheduledDate;
    var scheduledDropOfAddress;
    var scheduledPickUpAddress;
    var selectedDate;
    
    it('should login with valid credentials and navigate to Request Delivery page', () => {
        LoginPage.open();
        LoginPage.login(config.EMAIL, config.PASSWORD);

        RequestDeliveryPage.dismissTestingScenariosPopUp();
        RequestDeliveryPage.dismissPackageRefundPopUp();
        expect(RequestDeliveryPage.getPageTitle()).to.equal(strings.REQUEST_DELIVERY);
    });

    it('should select pick up address', () => {
        RequestDeliveryPage.enterPickUpAddressInput('tester test');
        RequestDeliveryPage.selectFirstSuggestedAddress();
        choosedPickUpAddress = RequestDeliveryPage.getChoosedPickUpAddress();
    });

    it('should select drop off address', () => {
        RequestDeliveryPage.enterDropOfAddressInput('tester test');
        RequestDeliveryPage.selectFirstSuggestedAddress();
        choosedDropOfAddress = RequestDeliveryPage.getChoosedDropOfAddress();
    });

    it('should select transport and scheduled date', () => {
        RequestDeliveryPage.selectMotorbikeTransport();
        RequestDeliveryPage.selectLaterRadioButton();
        RequestDeliveryPage.clickDate();

        selectedDate = RequestDeliveryPage.getNextDate();

        RequestDeliveryPage.selectNextDate();
        RequestDeliveryPage.clickRequestButton();
    });

    it('should validate date and addresses from Scheduled page', () => {
        scheduledDate = ScheduledPage.getScheduledDate();
        assert.equal(selectedDate, scheduledDate);

        scheduledPickUpAddress = ScheduledPage.getScheduledPickUpAddress();
        scheduledDropOfAddress = ScheduledPage.getScheduledDropOfAddress();

        assert.equal(choosedPickUpAddress, scheduledPickUpAddress);
        assert.equal(choosedDropOfAddress, scheduledDropOfAddress);
    });
});