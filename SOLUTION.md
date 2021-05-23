## Overall solution

The approach I chose was to create the acceptance tests as a happy flow for a scheduled job in the Sandbox Dashboard Web. <br/> For the API, I did a POST, GET, CANCEL job flow. For these I used: JavaScript, WebDriverIO, Mocha, Chai and Chai-http. <br/>
The Dashboard tests were done in a PageObject approach, trying to encapsulate as much logic as possible inside the Page classes. <br/>

There are two spec files:
- **specs/jobFlowAPI.js** (which contains the acceptance test for the API)
- **specs/scheduleNewEventDashboard.js** (which contains the acceptance test for the Dashboard)

## How to run the tests:
1. Installed Chrome 87
2. Run **npm install**
3. Run **npm run test**

## Sample run test report

```
[chrome 87.0] Spec: /Users/madalinavalache/Documents/GitHub/Stuart/test/specs/jobFlowAPI.js
[chrome 87.0] Running: chrome (v87.0.4280.88) on mac os x
[chrome 87.0]
[chrome 87.0] Create, view and cancel job - /v2/jobs API
[chrome 87.0]    ✓ POST - should create a new job
[chrome 87.0]    ✓ GET - should return created job
[chrome 87.0]    ✓ POST /cancel - should cancel created job
[chrome 87.0]
[chrome 87.0] 3 passing (5.3s)
------------------------------------------------------------------
[chrome 87.0] Spec: /Users/madalinavalache/Documents/GitHub/Stuart/test/specs/scheduleNewEventDashboard.js
[chrome 87.0] Running: chrome (v87.0.4280.88) on mac os x
[chrome 87.0] Schedule job flow - dashboard
[chrome 87.0]    ✓ should login with valid credentials and navigate to Request Delivery page
[chrome 87.0]    ✓ should select pick up address
[chrome 87.0]    ✓ should select drop off address
[chrome 87.0]    ✓ should select transport and scheduled date
[chrome 87.0]    ✓ should validate date and addresses from Scheduled page
[chrome 87.0]
[chrome 87.0] 5 passing (14.7s)


Spec Files:      2 passed, 2 total (100% completed) in 00:00:16 

```

## Test cases
I wrote 3 test cases for part of the functionality for the **Schedule** page.  <br/>
They can be found in "TEST_CASES.md" file.

## Bug report
The bug report can be found in **"BUG_REPORT.md"** file.