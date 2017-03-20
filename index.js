var fs = require("fs");
var express = require('express');
var multer = require('multer');

var app = express();

var respondseHTML = fs.readFileSync('client.html').toString();

app.get('/', function (req, res) {
    res.send(respondseHTML);
});

var upload = multer({ dest: 'upload/' });
app.post('/upload', upload.single('recfile'), function (req, res) {
    // req.file 是 `recfile` 文件的信息
    // req.body 将具有文本域数据, 如果存在的话
    console.log(req.file);
    // console.log(req.body);
    var response = {size: req.file.size};
    res.end(JSON.stringify(response));
});

app.listen(8080);
