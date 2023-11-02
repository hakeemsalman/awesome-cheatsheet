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