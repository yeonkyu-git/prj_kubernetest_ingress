const express = require('express');
const app = express();
const port = 3000

app.get('/item', (req, res) => {
  res.send("Hello World This is item Page");
})

app.listen(port, () => {
  console.log(`Listening Main Page on ${port}`);
})