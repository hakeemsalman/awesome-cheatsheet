const jsforce = require('jsforce')
const express = require('express')
require('dotenv').config()
const fs = require('fs');
const app = express()
const PORT = 3001

const { SF_LOGINURL, SF_USERNAME, SF_PASSWORD } = process.env
const fileName = 'data.txt';


const conn = new jsforce.Connection({
  loginUrl: SF_LOGINURL,
  version: '60.0'
})

conn.login(SF_USERNAME, SF_PASSWORD, (err, userInfo) => {
  if (err) {
    console.log(err);
  } else {
    console.log("User Id:" + userInfo.id);
    console.log("Org Id:" + userInfo.organizationId)
  }
})

const recordsList = [
  // PLACE YOUR ID'S
];

async function getReportTypes(recordsList) {
  const metaData = [];
  for (const reportId of recordsList) {
    try {
      const report = await conn.analytics.report(reportId).describe();
      metaData.push(report.reportMetadata.reportType.type);
      console.log(report.reportMetadata.reportType.type);
    } catch (error) {
      console.error(`Error for report ${reportId}:`, error);
      metaData.push('error Id',reportId);
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
    const metaData = await getReportTypes(recordsList);
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



