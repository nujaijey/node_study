var http = require("http");
var fs = require("fs");
var solarLunar = require("solarLunar");

var server = http.createServer(function (req, res) {
    // 设置字符集
    res.setHeader("Content-Type", "text/html;charset=UTF8");

    // 得到用户的url
    var url = req.url;
    // 使用正则表达式进行信息的获取
    var arr = url.match(/\/(.+)\/(.+)\/(.+)$/);
    console.log(arr)
    // 如果没有对应的路由地址，抛出错误
    if (!arr) {
        res.end("<h1>无页面显示</h1>")
        return;
    }

    // 获取信息
    // 正则的第一项
    var $1 = arr[1];
    // 正则的第二项
    var $2 = arr[2]
    // 正则的第二项
    var $3 = arr[3]
    var gl = solarLunar.solar2lunar($1, $2, $3);
    var nl = solarLunar.lunar2solar($1, $2, $3);
    console.log(nl);
    res.write("<h2>当前日期公历是：" + gl.cYear + "年" + gl.cMonth + "月" + gl.cDay + "日</h2>");
    res.write("<h2>当前日期农历是：" + gl.lYear + "年" + gl.lMonth + "月" + gl.lDay + "日</h2>");
    res.end("<h2>当前日期干支是：" + gl.gzYear + "年" + gl.gzMonth + "月" + gl.gzDay + "日</h2>")
})

server.listen(3000)