

## Simple connection

```js
const jsforce = require('jsforce')
const express = require('express')
require('dotenv').config()
const app = express()
const PORT = 3001

const {SF_LOGINURL,SF_USERNAME,SF_PASSWORD} = process.env

app.get('/', (req, res)=>{
res. send("Salesforce integration with nodejs")
})

app.listen(PORT, ()=>{
console.log(`Server is running at http://localhost:${PORT}`)
})



```