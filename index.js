const express = require('express');
const names = require('./nostr.json');
const app = express();

app.use(express.json());

// /.well-known/nostr.json?name=<user>
app.get('/', (req, res) => {
  const qname = req.query.name;
  if (qname) {
    names.names.forEach(name => {
      if (Object.keys(name)[0] === qname) {
        res.status(200).json({"names": name});
        return;
      }
    })
  }
  res.sendStatus(404);
  return;
});

app.listen(3000, () => {
  console.log('server started');
});