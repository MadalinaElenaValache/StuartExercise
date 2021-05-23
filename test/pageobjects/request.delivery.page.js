const Page = require('./page');
const moment = require('moment');

/**
 * sub page containing specific selectors and methods for a Request delivery page
 */
class RequestDeliveryPage extends Page {
    
    get addressFirstOption () { return $('//div[@id="react-autowhatever-1"]/ul/li[1]') }
    get date () { return $('#daySelect') }
    get dropOfAddressInput () { return $('#dropOffCard-0-fields-field-address') }
    get laterRadioButton () { return $('#later') }
    get motorbikeTransport () { return $('#transport-motorbike') }
    get newRequestTextFromMenu () { return $('//li[@id="newRequest-link"]/a/span/span') }
    get nextDate () { return $('//div[@id="dropdownMenuContainer"]/a[2]') }
    get pickUpAddressInput () { return $('#pickUpCard-0-fields-field-address') }
    get requestButton () { return $('#requestButton') }
    get scenarioTooltipCloseButton () { return $('#ScenarioTooltipCloseButton') }
    get understoodButton () { return $('//button/span[contains(text(),"Understood")]') }

    dismissTestingScenariosPopUp () {
        browser.pause(5000);
        
        if (this.scenarioTooltipCloseButton.isDisplayed()) {
            this.scenarioTooltipCloseButton.click();
        }
    }

    dismissPackageRefundPopUp () {
        if (this.understoodButton.isDisplayed()) {
            this.understoodButton.click();
        }
    }

    getPageTitle () {
        return this.newRequestTextFromMenu.getText();
    }
    
    enterPickUpAddressInput (addressName) {
        this.pickUpAddressInput.setValue(addressName);
    }

    selectFirstSuggestedAddress() {
        this.addressFirstOption.click();
    }
    
    getChoosedPickUpAddress () {
        var pickUpAddressInput = this.pickUpAddressInput;
        return pickUpAddressInput.value;
    }

    enterDropOfAddressInput (addressName) {
        this.dropOfAddressInput.scrollIntoView();
        this.dropOfAddressInput.setValue(addressName);
    }

    getChoosedDropOfAddress () {
        var dropOfAddressInput = this.dropOfAddressInput;
        return dropOfAddressInput.value;
    }

    selectMotorbikeTransport () {
        this.motorbikeTransport.scrollIntoView();
        this.motorbikeTransport.click();
    }

    selectLaterRadioButton () {
        this.laterRadioButton.click();
    }

    clickDate () {
        this.date.click();
    }

    selectNextDate () {
        this.nextDate.waitForExist({ timeout: 5000 });
        this.nextDate.click();
    }

    getNextDate () {
        var selectedDateLabel = this.nextDate.getText();
        var selectedDate =  moment(selectedDateLabel, 'DD M').set('year', 2021);
        
        return selectedDate.toISOString();
    }

    clickRequestButton () {
        this.requestButton.click();
    }
}

module.exports = new RequestDeliveryPage();