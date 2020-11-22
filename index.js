// const http = require("http");
// const host = "localhost";
// const port = "80";
// const fs = require("fs");
// const StringDecoder = require("string_decoder").StringDecoder;

// const requestListener = (req, res) => {
//   if (req.method === "GET") {
//     let loginReadStream = fs.createReadStream("videoContent.html");
//     loginReadStream.on("data", (chunk) => {
//       res.write(chunk);
//     });
//     loginReadStream.on("end", () => {
//       res.end();
//     });
//   } else {
//     let decoder = new StringDecoder("utf-8");
//     let buffer = "";
//     let date = new Date();
//     let headers = req.headers;
//     console.log(headers);
//     let filterUrl = headers["filter"];
//     console.log(filterUrl);
//     let fileName;
//     let todayDateDir =
//       "records/" +
//       date.getFullYear() +
//       "-" +
//       date.getMonth() +
//       "-" +
//       date.getDay();
//     if (!fs.existsSync(todayDateDir)) {
//       console.log(
//         "folder: " + todayDateDir + " does not exist, creating one.."
//       );
//       fs.mkdirSync(todayDateDir);
//     }
//     fileName =
//       todayDateDir +
//       "/" +
//       filterUrl +
//       "-" +
//       date.getHours() +
//       "-" +
//       date.getMinutes() +
//       ".webm";
//     let writableStream = fs.createWriteStream(fileName);
//     req.on("data", (chunk) => {
//       buffer += decoder.write(chunk);
//       writableStream.write(chunk);
//     });

//     req.on("end", () => {
//       writableStream.write(decoder.end());
//       res.writeHead(200, "OK", { "Content-Type": "application/json" });
//       res.end(`{"name":"${fileName}"}`);
//     });
//   }
// };

// const server = http.createServer(requestListener);
// server.listen(port, host, () => {
//   console.log("Server is running on " + port);
// });

var http = require('http');
var fs = require('fs');

const PORT=8081; 

fs.readFile('./videoContent.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});