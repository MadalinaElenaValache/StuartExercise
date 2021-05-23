# Test cases <br/><br/>

## Job overview on Schedule page

**Priority**: P1 <br/>
**Preconditions**: Have at leat one scheduled job <br/>

| Steps  | Expected  | 
|----------|----------|
| Navigate to Schedule page | 1. Schedule page is loadead <br/> 2. 'Schedule' from menu is underlined <br/> 3. 'x scheduled delivery' title is visible <br/> 4. The job is displayed in a table with 2 rows <br/> 5. The table header contains: ID, Date, Pick up and Drop off <br/> 6. Under each there is relevant data <br/> 7. 'X' button is visibile in the right side|
| Click on the table details| 1. Job details page is loaded <br/> 2. Text similar with: 'Delivery #100151512' is visible right after back arrow|

---
---

## Cancel job on Schedule page when only one job is scheduled

**Priority**: P1 <br/>
**Preconditions**: <br/> 
1. Have only one scheduled job 
2. Navigate to Schedule page  

| Steps  | Expected  | 
|----------|----------|
| Click 'X' button| A pop-up with the next details should be visible: <br/> 1. You are about to cancel a delivery to <br/> 2.  Address (e.g. Carrer de la Providència 114B, 08024 Barcelona<br/> 3. This cancellation has no fee <br/> 4. Help us improve Stuart services and tell us why you want to cancel your order -> with the following options:  <br/> a. Address error <br/> b. Courier refused to deliver the package <br/> c. Cancellation request by end customer <br/> d. Duplicated request <br/> f. Incorrect package <br/> g. No couriers available <br/> h. Other <br/> i. Package damaged <br/> j. Package not ready <br/> k. Pickup closed <br/> l. Technical issue <br/> m. Wrong request <br/> 5. 'Back' button <br/> 6. 'Yes, cancel it' button|
| Click every radio button | Only one at a time can be selected |
| Click 'Back' button | Pop up is closed and user can see job overview on Schedule page|
| Click 'X' button | Pop up is visible |
| Click 'Yes, cancel it' button | 1. Pop up is closed and the job is deleted <br/> 2. New pop up saying "Job canceled Dismiss" is visible for few seconds <br/> 3. User is redirected to a new page which contais an image and "No scheduled deliveries You can schedule delivery up to 4 days in advance." text |

---

## Cancel job on Schedule page when there are at least two jobs scheduled

**Priority**: P1 <br/>
**Preconditions**: <br/> 
1. Have at least two jobs scheduled
2. Navigate to Schedule page  

| Steps  | Expected  | 
|----------|----------|
| Click 'X' button| Pop-up is visible|
| Click 'Yes, cancel it' button | 1. Pop up is closed and the job is deleted <br/> 2. New pop up saying "Job canceled Dismiss" is visible for few seconds <br/> 3. User is redirected back to Schedule page and at least one job is visible |

---