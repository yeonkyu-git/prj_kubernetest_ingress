const express = require('express');
const app = express();
const port = 3000

app.get('/login', (req, res) => {
  res.send("Hello World This is login Page");
})

app.listen(port, () => {
  console.log(`Listening Main Page on ${port}`);
})