# Bug Report



**Bug Name:** "Back to Dashboard" returns "This site can’t be reached"<br/>
**Area**: Settings > API <br/>
**Build version:** Unknown<br/>
**Severity**: Low <br/>
**Priority**: Low <br/>
**Environment**: DEV <br/>

---

### Description:
<br/>
Being in Settings and navigating to API, reaches the user to a page with details about API. On this page, there is a link named "Back to Dashboard", and when the user clicks it, is redirected to a page containing the message: "This site can’t be reached".

---

### Steps to reproduce:
<br/>
1 Navigate to Sandbox Dashboard Web (https://dashboard.sandbox.stuart.com) <br/>
2. Login with valid credentials <br/>
3. Click on the down arrow right of the profile image <br/>
4. Navigate to Settings <br/>
5. From the left menu, click API <br/>
6. Click the "Back to Dashboard" link <br/>

---
### Actual result:
<br/>
User is redirected to https://dashboard-beta.stuart.com/ 

![alt text](https://i.ibb.co/Sx8Ytkg/Back-to-Dashboard-FAIL.png "URL not working")

---

### Expected result:

User should be redirected to Sandbox Dashboard Web: https://dashboard.sandbox.stuart.com/

---