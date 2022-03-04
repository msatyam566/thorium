const router = require("../routes/route")
const moment = require('moment')
const ip = require('ip')

const mid1 = function(req, res, next){
    let date = new Date();
    var datewithStr= moment(date).format('YYYY-MM-DD:HH:mm:ss');
    console.log(datewithStr);
    next()
}

const mid2 = function(req, res, next){
    console.log(ip.address());
    next()
}

const mid3 = function(req, res, next){
    let rout = req.path
        console.log(rout);
        next()
}


module.exports.mid3 = mid3
module.exports.mid2 = mid2
module.exports.mid1 = mid1
