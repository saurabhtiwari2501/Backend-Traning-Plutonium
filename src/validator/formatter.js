let str = "     a string with spaces"
let str1 = "THIS IS A FRESH START OF MY JOUERNY"
let str2 = "Getting better my future"
let trim = function(){
    console.log(str.trim())
}

let changeToLowerCase = function(){
    consolelog(str1.toLowerCase())

}

let changeToUpperCase = function(){
    console.log(str2.toUpperCase())
}

module.exports.trim = trim
module.exports.toLowerCase= changeToLowerCase
module.exports.toUpperCase = changeToUpperCase