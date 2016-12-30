var m1 = require("./m1");
var m2 = require("./m2");

require("./css2.css");
//var oPic = require("./1.jpp")

console.log(m1)
console.log(m2)

if (module.hot) {
  module.hot.accept();
}
