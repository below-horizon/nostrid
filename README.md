# nostrid
Serves single or multiple NIP-05 id's from own domain.

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

## Reverse proxy

### Nginx
```
location /.well-known/nostr.json {
  add_header Access-Control-Allow-Origin *;
  add_header Content-Type application/json;
  proxy_set_header Host $http_host;
  proxy_pass http://127.0.0.1:3001;
}
```

## Systemd service example
```
# /etc/systemd/system/nostrid.service

[Unit]
Description=nostrid
After=network.target

[Service]
WorkingDirectory=/home/USER/nostrid
ExecStart=/usr/bin/npm run start
User=USER
Restart=always
TimeoutSec=120
RestartSec=30
StandardOutput=null
StandardError=journal

[Install]
WantedBy=multi-user.target
```