# API


## End point for access token

URL : https://oauth2.googleapis.com/token

param :
**grant_type**: Set to "authorization_code".
**client_id**: Your application's client ID obtained from GCP console.
**client_secret**: Your application's client secret (keep this confidential).
**redirect_uri**: The same redirect URI you used in the authorization request.
**code**: The authorization code received from Google after user consent.



System.CalloutException: Unauthorized endpoint, please check Setup->Security->Remote site settings. endpoint = https://popcornapps186-dev-ed.my.salesforce.com/services/data/v60.0/ui-api/records

