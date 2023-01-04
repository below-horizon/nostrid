const express = require('express')
const names = require('./nostr.json')
const app = express()

const PORT = 3001

app.use(express.json())

const getUser = async (qname) => {
  let rname = null
  names.names.forEach(name => {
    if (Object.keys(name)[0] === qname) {
      rname = name
    }
  })
  return rname
}

// /.well-known/nostr.json?name=<user>
app.get('/.well-known/nostr.json', async (req, res) => {
  const rname = await getUser(req.query.name)
  rname != null ? res.json({"names": rname}) : res.sendStatus(404)
})

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});