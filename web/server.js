var https = require('https')
  , fs = require('fs')
  , express = require('express')
  , connect = require('connect')
  , options = {
      key: fs.readFileSync('key.pem')
    , cert: fs.readFileSync('cert.pem')
    , requestCert: true
    , rejectUnauthorized: false
    , agent: false
  }
  , port = process.env.PORT || 9090
  , app = connect()


app.use(connect.static(__dirname))
https.createServer(options, app).listen(port, function() {
  console.log("server started at port", port)
})