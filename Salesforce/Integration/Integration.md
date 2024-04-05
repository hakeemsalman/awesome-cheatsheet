Salesforce Integration
----------------------

## Client Credentials Flow

### Postman settings
1. POST method
2. URL - https://MYDOMAIN.my.salesforce.com/services/oauth2/token
3. POST body - x-wwww-form-encoded
4. body -
   1. grant_type:client_credentials
   2. client_id:{{clientId}}
   3. client_secret:{{clientSecret}}

### Manage Connected App

![alt text](./app%20manager.png)

### Errors

#### {"error":"invalid_grant","error_description":"no client credentials user enabled"}

1. Go to *Manage Connected App* in Setup and Click on Edit and Assign User in Client Credential flow **Run As**
 
