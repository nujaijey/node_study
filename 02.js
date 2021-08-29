// 得到内置模块,引入NodeJS的内置http模块
var http = require("http");

// 创建服务器，使用createServer方法
// 回调函数中有req参数表示的是请求，res的参数表示的是响应
var server = http.createServer(function (req, res) {
    // 输出
    res.end("HELLO NODE");
})

// 监听，默认的端口是80（阿帕奇），所以我们用3000端口
server.listen(3000)