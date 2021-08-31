var http = require("http");
var fs = require("fs");

// 创建服务器
var server = http.createServer(function (req, res) {
    // 设置字符集
    res.setHeader("Content-Type", "text/html;charset=UTF8");
    // 对页面的内容进行请求
    if (req.url === "/star/zhoujielun") {
        fs.readFile("./public/zhoujielun.html", function (err, data) {
            res.end(data);
        })
    }
    // 对页面的图片地址进行请求
    else if (req.url === "/star/images/zhoujielun.jpg") {
        res.setHeader("Content-Type", "image/jpg");
        fs.readFile("./public/images/zhoujielun.jpg", function (err, data) {
            res.end(data);
        })
    }
    else if (req.url === "/star/wanglihong") {
        fs.readFile("./public/wanglihong.html", function (err, data) {
            res.end(data);
        })
    }
    else {
        res.end("无页面显示");
    }
});

// 监听3000端口
server.listen(3000);
