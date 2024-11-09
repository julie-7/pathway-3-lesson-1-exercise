var http = require(`http`)
http.createServer(serverpurpose).listen(3000)
function serverpurpose(req, res) {

    let radius=20
    let area=3.14*(radius*radius)
    res.writeHead(200, { "Content-type": "text/html" })
    res.end(`${area}`)
}