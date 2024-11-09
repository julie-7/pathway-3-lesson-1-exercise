var http = require(`http`)
http.createServer(serverpurpose).listen(3000)
function serverpurpose(req, res) {
    let height = 10
    let width = 10
    let perimeter = (height * width)

    res.writeHead(200, { "Content-type": "text/html" })
    res.write(`the perimeter is ${perimeter}`)
    res.end(`<h2>goodbye</h2>`)
}

