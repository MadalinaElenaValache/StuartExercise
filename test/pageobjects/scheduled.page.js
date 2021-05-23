const Page = require('./page');
const moment = require('moment');

/**
 * sub page containing specific selectors and methods for a Scheduled page
 */
class ScheduledPage extends Page {

    get scheduledDate () { return $('//table/tbody/tr/td[2]/span') }
    get scheduledPickUpAddress () { return $('//table/tbody/tr/td[3]/span/p') }
    get scheduledDropOfAddress () { return $('//table/tbody/tr/td[4]/span') }

    getScheduledDate () {
        browser.pause(5000);

        var scheduledDayLabel = this.scheduledDate.getText();
        var scheduledDay = moment(scheduledDayLabel, 'DD-MM').set('year', 2021);

        return scheduledDay.toISOString();
    }

    getScheduledPickUpAddress () {
        var scheduledPickUpAddress = this.scheduledPickUpAddress.getValue();

        return scheduledPickUpAddress;
    }

    getScheduledDropOfAddress () {
        var scheduledDropOfAddress = this.scheduledDropOfAddress.getValue();
        
        return scheduledDropOfAddress;
    }
}

module.exports = new ScheduledPage();