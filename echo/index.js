var express = require("express");

exports.server = express();
exports.server.get("/headers/", function(inReq, inRes)
{
    inRes.json(inReq.headers);
});
exports.server.get("/headers/:header", function(inReq, inRes)
{
    inRes.json(inReq.headers[inReq.params.header]);
});
exports.server.get("/version", function(inReq, inRes)
{
    inRes.json(inReq.httpVersion);
});
exports.start = function(inPort, inIP)
{
      exports.server.listen(inPort, inIP);
};