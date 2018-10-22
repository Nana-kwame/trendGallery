const express = require("express");
const path = require("path");
const app = express();
app.use(express.static("./dist/trendGallery"));


app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname, '/dist/trendGallery/index.html'));
});

app.listen(process.env.PORT || 8081);
