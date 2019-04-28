// time.js
const moment = require("moment")

module.exports = (req, res) => {
    const time = moment().toISOString();
    res.send({ time: time })
}