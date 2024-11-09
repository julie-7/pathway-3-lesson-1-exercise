var http = require("http")
var url = require("url")
http.createServer(serverpurpose).listen(3000)
function serverpurpose(req, res) {


    res.writeHead(200, { "content-type": "text/html" })
    let urldata = url.parse(req.url, true)
    let parameter = urldata.query
    
    if (urldata.pathname === "/multiply") {
        let number1 = parameter.a
        let number2 = parameter.b
        let multiply = parseInt(number1)* parseInt(number2)
        res.write(multiply)


    }

    res.end()
}
