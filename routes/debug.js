var express = require('express');
var router = express.Router();
var os = require('os');
var counter = 0;

router.get('/', function(req, res, next) {
  var response = "";
  response += 'counter' + ' - ' + counter + '<br/>';
  response += 'os.hostname()' + ' - ' + os.hostname() + '<br/>';
  response += 'os.type()' + ' - ' + os.type() + '<br/>';
  response += 'os.platform()' + ' - ' + os.platform() + '<br/>';
  response += 'os.arch()' + ' - ' + os.arch() + '<br/>';
  response += 'os.release()' + ' - ' + os.release() + '<br/>';
  response += 'os.uptime()' + ' - ' + os.uptime() + '<br/>';
  response += 'os.loadavg()' + ' - ' + os.loadavg() + '<br/>'
  response += 'os.totalmem()' + ' - ' + os.totalmem() + '<br/>';
  response += 'os.freemem()' + ' - ' + os.freemem() + '<br/>';
  response += 'os.cpus()' + ' - ' + os.cpus().length + '<br/>';
  response += 'os.networkInterfaces()' + ' - ' + os.networkInterfaces() + '<br/>';
  console.log(response);





  res.send(response);


  counter++;


});

module.exports = router;
