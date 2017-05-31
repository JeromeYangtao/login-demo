var http = require('http')
var fs = require('fs')
var url = require('url')

var port = process.env.PORT || 8888;

var server = http.createServer(function(request, response) {

    var temp = url.parse(request.url, true)
    var path = temp.pathname
    var query = temp.query
    var method = request.method

    //从这里开始看，上面不要看

    if (path === '/') { // 如果用户请求的是 / 路径
        var string = fs.readFileSync('./index.html')
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.end(string)
    } else if (path === '/signUp' && method === 'POST') {
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.end('注册成功')
    } else if (path === '/jquery-3.1.1.min.js') {
        let string = fs.readFileSync('./jquery-3.1.1.min.js')
        response.setHeader('Content-Type', 'application/javascript;charset=utf-8')
        response.end(string)
    } else if (path === '/main.js') {
        let string = fs.readFileSync('./main.js')
        response.setHeader('Content-Type', 'application/javascript;charset=utf-8')
        response.end(string)
    } else if (path === '/home.html') {
        let string = fs.readFileSync('./home.html')
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.end(string)
    } else if (path === '/login' && method === 'POST') {
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.end('登陆成功')
    } else {
        response.statusCode = 404
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.end('找不到对应的路径，你需要自行修改 index.js')
    }

    // 代码结束，下面不要看
    console.log(method + ' ' + request.url)
})



function frankHash(string) {
    return 'frank' + string + 'frank'
}

function parseCookies(cookie) { // JSON.parse
    try {
        return cookie.split(';').reduce(
            function(prev, curr) {
                var m = / *([^=]+)=(.*)/.exec(curr);
                var key = m[1];
                var value = decodeURIComponent(m[2]);
                prev[key] = value;
                return prev;
            }, {}
        );
    } catch (error) {
        return {}
    }
}

function stringifyCookies(cookies) { //JSON.stringify
    var list = [];
    for (var key in cookies) {
        list.push(key + '=' + encodeURIComponent(cookies[key]));
    }
    return list.join('; ');
}

server.listen(port)
console.log('监听 ' + port + ' 成功，请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)