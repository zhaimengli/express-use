var http = require("http");
/*http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-type": "text/plain"
    });
    res.end("hello world")
}).listen(3000)

http.createServer(function (req, res) {
    var path = req.url.toLocaleLowerCase();
    res.writeHead(200, {
        "Conent-type": "text/html"
    })
    switch (path) {
        case "/home":
            res.end("home")
            break;
        case "/about":
            res.end("about")
            break
        default:
            res.end("hello world")
    }
}).listen(3000)*/
console.log("nodejs中路由的使用");
var fs = require("fs");
/**
 * 读取页面，并返回
 * @param {*} res
 * @param {*} path
 * @param {*} contentType
 * @param {*} responseCode
 */
function serverStaticFile(res, path, contentType, responseCode) {
  if (!responseCode) {
    responseCode = 200;
  }
  console.log(__dirname);
  fs.readFile(__dirname + path, function(err, data) {
    if (err) {
      res.writeHead(500, { "Content-type": "text-plain" });
      res.end("err");
    } else {
      res.writeHead(responseCode, {
        "Content-type": contentType
      });
      res.end(data);
    }
  });
}

http
  .createServer(function(req, res) {
    var path = req.url.toLocaleLowerCase();
    res.writeHead(200, {
      "Conent-type": "text/html"
    });
    switch (path) {
      case "/home":
        serverStaticFile(res, "/home.html", "text/html");
        break;
      case "/logo":
        serverStaticFile(res, "/1.jpg", "image/jgeg");
        break;
      default:
      //res.end("hello world");
    }
  })
  .listen(3000);
console.log("nodejs中路由的使用1");
