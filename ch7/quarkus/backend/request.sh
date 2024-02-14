#!/bin/bash
export client_secret=CLIENT_SECRET

export access_token=$(\
    curl -X POST http://localhost:8180/realms/myrealm/protocol/openid-connect/token \
    -d "client_id=mybackend&client_secret=$client_secret" \
    -H "content-type: application/x-www-form-urlencoded" \
    -d "username=alice&password=alice&grant_type=password" \
    | jq --raw-output ".access_token" )

echo $access_token

curl -v -X GET http://localhost:8080/hello -H "Authorization: Bearer "$access_token
