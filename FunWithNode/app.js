console.log('Hello world');

var x = 10;
var y = 25;
console.log(x * y);

var msgs = require("./msgs.js");
var msg = new msgs();
console.log(msg.first);

var logger = require("./logger");
logger.log("Test logger");

var _ = require("underscore");