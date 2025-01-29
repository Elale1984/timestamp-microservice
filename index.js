const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
