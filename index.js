const express = require('express');
const config = require('./config');
const app = express();

app.use(express.json());

const getUser = async (qname) => {
  let rname = null;
  config.names.forEach((user) => {
    if (user.name === qname) {
      rname = user.name;
    }
  });
  return rname;
};

// /.well-known/nostr.json?name=<user>
app.get('/.well-known/nostr.json', async (req, res) => {
  const rname = await getUser(req.query.name);
  rname != null ? res.json({ names: rname }) : res.sendStatus(404);
});

app.listen(config.port, () => {
  console.log(`server started at port ${config.port}`);
});
