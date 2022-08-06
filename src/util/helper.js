const { welcome } = require("../logger/logger");

var today = new Date();
var data = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

const nameOfMonth = new Date().toLocaleDateString(
    'default', {month: 'long'}
);
console.log(nameOfMonth);

let getBatchinfo=()=>console.log("Plutonium, W3D3, the topic for today is Nodejs module system")

module.exports.name = batcName
module.export.welcome = welcome
