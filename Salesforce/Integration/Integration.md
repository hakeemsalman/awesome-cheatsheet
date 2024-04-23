- [Salesforce Integration](#salesforce-integration)
- [Client Credentials Flow API](#client-credentials-flow-api)
  - [Postman settings](#postman-settings)
  - [Manage Connected App](#manage-connected-app)
  - [Errors](#errors)
    - [{"error":"invalid\_grant","error\_description":"no client credentials user enabled"}](#errorinvalid_granterror_descriptionno-client-credentials-user-enabled)
    - [Security token](#security-token)
- [Username and password flow](#username-and-password-flow)
- [Create a Record API](#create-a-record-api)
- [JSforce connection](#jsforce-connection)
- [Page Layout Metadata api](#page-layout-metadata-api)


Salesforce Integration
----------------------

## Client Credentials Flow API

### Postman settings
1. POST method
2. URL - https://MYDOMAIN.my.salesforce.com/services/oauth2/token
3. Header - (Not need)
4. Body -
   1. x-wwww-form-encoded
      1. grant_type:client_credentials
      2. client_id:{{clientId}}
      3. client_secret:{{clientSecret}}

### Manage Connected App

![alt text](./app%20manager.png)

### Errors

#### {"error":"invalid_grant","error_description":"no client credentials user enabled"}

1. Go to *Manage Connected App* in Setup and Click on Edit and Assign User in Client Credential flow **Run As**

#### Security token

1. If reset security token is not available in Settings.
2. Then there is a IP range settings values.
3. Delete it or add your IP address.
4. With this you can use **Username password flow *wtihout* security token** 
 
## Username and password flow

1. Use `jsforce` to connect seam lessly in express server.
2. Follow this Github link to know more.
   

## Create a Record API

1. POST method
2. URL - https://MYDOMAIN.my.salesforce.com/services/data/v60.0/ui-api/records/
3. Header - 
   1. Authorization - Bearer TOKEN
4. Body -
   1. raw
      1. ```json
            {
               "allowSaveOnDuplicate": false,
               "apiName": "Account",
               "fields": {
                  "Name": "My account"
               }
            }
         ```

## JSforce connection

```js
const jsforce = require('jsforce')
const express = require('express')
require('dotenv').config()
const fs = require('fs');
const app = express()
const PORT = 3001

const { SF_LOGINURL, SF_USERNAME, SF_PASSWORD, SF_TOKEN } = process.env

const fileName = './output.txt';
const PASSWORD_TOKEN = SF_PASSWORD+SF_TOKEN


const conn = new jsforce.Connection({
  loginUrl: SF_LOGINURL,
  version: '60.0'
})

conn.login(SF_USERNAME, PASSWORD_TOKEN, (err, userInfo) => {
  if (err) {
    console.log(err);
  } else {
    console.log("User Id:" + userInfo.id);
    console.log("Org Id:" + userInfo.organizationId)
    console.log(`open localhost:${PORT} to fetch report`)
  }
})

function getReportIdList() {
 const data = fs.readFileSync('./input.txt', { encoding: 'utf8', flag: 'r' });
 return data.trim().split(',');
}

async function getReportTypes(recordsList) {
  const metaData = [];
  let count = 1;
  for (const reportId of recordsList) {
    try {
      const report = await conn.analytics.report(reportId).describe();
      metaData.push(report.reportMetadata.reportType.type);
      console.log(report.reportMetadata.reportType.type);
      console.log(count++, ' completed');
    } catch (error) {
      console.error(`Error for report ${reportId}:`, error);
      metaData.push(count++,' error Id ', reportId,);
    }
  }
  return metaData;
}


async function writeToFile(data, fileName) {
  try {
    const content = data.join('\n') + '\n'; // Join data with newlines and add a final newline
    fs.writeFileSync(fileName, content, (err) => err && console.error('file write err'));
    console.log('Data appended to file successfully!');
  } catch (error) {
    console.error('Error appending to file:', error);
  }
}

app.get('/', async (req, res) => {
  try {
    const reportIdList = await getReportIdList();
    const metaData = await getReportTypes(reportIdList);
    console.log('completed');
    await writeToFile(metaData, fileName);
    console.log("File written successfully!");
    res.send(metaData);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
```

## Page Layout Metadata api

`/services/data/v58.0/tooling/sobjects/Layout/{Id}` id => page layout id

