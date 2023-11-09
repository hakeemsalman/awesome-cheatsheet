## Authentication methods
You have four options for authenticating with this API:
1. [OAuth2 Access Token](#-1-oauth2-access-token)
2. Client ID and Client Assertion (confidential applications)
3. Client ID and Client Secret (confidential applications)
4. Client ID (public applications)

## 1 OAuth2 Access Token

Send a valid Access Token in the Authorization header, using the Bearer authentication scheme.
```curl
GET https://{yourDomain}/userinfo
Authorization: 'Bearer {ACCESS_TOKEN}'
```

## Salesforce

POST  https://platform-enterprise-9548-dev-ed.scratch.my.salesforce.com/services/oauth2/token

// bulk-edit 

x-form-urlencoded - body:

username:your-email
password:your-password|your-password-key
grant_type:password
client_id: your-Client-ID
client_secret: your-Secret-Key

## Hrone

POST  https://auth.hrone.cloud/oauth2/token

x-form-urlencoded - body:

username:{{username}}
password:{{password}}
grant_type:{{grant_type}}
loginType:{{loginType}}