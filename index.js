const express = require('express');
const config = require('./config');
const app = express();

app.use(express.json());

const getUser = async (q) => {
  let r = null;
  config.names.forEach((user) => {
    if (user.name === q) {
      r = {};
      r[user.name] = user.pubkey;
    }
  });
  return r;
};

// /.well-known/nostr.json?name=<user>
app.get('/.well-known/nostr.json', async (req, res) => {
  const q = await getUser(req.query.name);
  q != null ? res.json({ names: q }) : res.sendStatus(404);
});

app.listen(config.port, () => {
  console.log(`server started at port ${config.port}`);
});
