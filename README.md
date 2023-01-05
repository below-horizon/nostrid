# nostrid

## Prerequisite

- Nodejs

## Installation
```
git clone https://github.com/below-horizon/nostrid
cd nostrid && npm install
npm run start
```
## Usage

Runs default on port 3001.

Inside nostr.json edit your own desired name and nostr pubkey.

You should be able to access to https://YOURDOMAIN.COM/.well-known/nostr.json?name=USERNAME and get a [NIP-05](https://github.com/nostr-protocol/nips/blob/master/05.md) JSON response.

## Reverseproxy

# Nginx
```
location /.well-known/nostr.json {
  add_header Access-Control-Allow-Origin *;
  add_header Content-Type application/json;
  proxy_set_header Host $http_host;
  proxy_pass http://127.0.0.1:3001;
}
```
