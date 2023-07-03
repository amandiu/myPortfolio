const path = require('path');
const getControler = (req, res) => {
    res.sendFile(path.join(__dirname+"/../Views/index.html"))
}

module.exports = getControler;