var express = require('express');
var session = require('express-session');
var Keycloak = require('keycloak-connect');
var cors = require('cors');
var queryString = require('querystring');

var dns = require('node:dns');
dns.setDefaultResultOrder('ipv4first');

var app = express();

app.use(cors());

var memoryStore = new session.MemoryStore();

app.use(session({
  secret: 'some secret',
  resave: false,
  saveUninitialized: true,
  store: memoryStore
}));

var keycloak = new Keycloak({ store: memoryStore });

app.use(keycloak.middleware());

app.get('/secured', keycloak.protect('realm:myrole'), function (req, res) {
  res.setHeader('content-type', 'text/plain');
  res.send('Secret message!');
});

app.get('/public', function (req, res) {
  res.setHeader('content-type', 'text/plain');
  res.send('Public message!');
});

app.get('/info', function (req, res) {
  res.setHeader('content-type', 'text/plain');    
  res.send('info: ' + queryString.stringify(keycloak.getConfig()));  
});

app.get('/', function (req, res) {
  res.send('<html><body><ul><li><a href="/public">Public endpoint</a></li><li><a href="/secured">Secured endpoint</a></li></ul></body></html>');
});

app.listen(3000, function () {
  console.log('Environment Variables:');
  for (const key in process.env) {
    console.log(`${key}: ${process.env[key]}`);
  }
  console.log('Started at port 3000');
});
