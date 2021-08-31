// 得到内置模块,引入NodeJS的内置http模块
var http = require("http");

// 创建服务器，使用createServer方法
// 回调函数中有req参数表示的是请求，res的参数表示的是响应
var server = http.createServer(function (req, res) {
    // 设置字符集
    res.setHeader("Content-Type", "text/html;charset=UTF8")

    // 得到用户的url
    var url = req.url;
    // 使用正则表达式进行信息的获取
    var arr = url.match(/\/user\/(.+)\/(.+)\/(.+)$/);
    console.log(arr)
    // 如果没有对应的路由地址，抛出错误
    if (!arr) {
        res.end("<h1>无页面显示</h1>")
        return;
    }

    // 获取信息
    // 正则的第1项
    var userName = arr[1];
    // 正则的第2项
    var listName = arr[2];

    // 数据模拟
    var user = {
        "zhoujielun": "周杰伦",
        "zhangyi": "张译",
        "wujing": "吴京",
        "yiyangqianxi": "易烊千玺"
    }
    var list = {
        "post": "文章",
        "ask": "提问",
        "answer": "回答",
        "pins": "想法"
    }


    // 页面返回的内容
    res.write("<h1>" + user[userName] + "你好</h1>")
    res.end("<h2>欢迎来到" + list[listName] + "版块</h2>")
})

// 监听，默认的端口是80（阿帕奇），所以我们用3000端口
server.listen(3000)