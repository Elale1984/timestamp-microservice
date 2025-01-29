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

app.get("/api/:date?", (req, res) => {
  let dateParam;

  if (!req.params.date) {
    dateParam = new Date();
  } else {
    const timestamp = Number(req.params.date);
    dateParam = isNaN(timestamp) ? new Date(req.params.date) : new Date(timestamp);
  }

  if (isNaN(dateParam.getTime())) {
    return res.json({ error: "Invalid Date" });
  }

  res.json({
    unix: dateParam.getTime(),
    utc: dateParam.toUTCString(),
  });
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
