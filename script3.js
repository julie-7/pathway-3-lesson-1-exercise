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
        res.write(`<p>the result is ${multiply}</p>`)
    }else if(urldata.pathname === "/divide"){
        let num1 = parameter.a
        let num2 = parameter.b
        let divide = parseInt(num1) / parseInt(num2)
        res.write(`<p>the result is ${divide}</p>`)
    }else if(urldata.pathname === "/subtract"){
        let numb1 = parameter.a
        let numb2 = parameter.b
        let subtract = parseInt(numb1)- parseInt(numb2)
        res.write(`<p>the result is ${subtract}</p>`)
    }

    res.end()
}
