// time.js
const moment = require("moment")

module.exports = (req, res) => {
    var time = moment().toISOString();
    res.send({ time: time })
}