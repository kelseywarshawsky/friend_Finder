///for our data 

var friendData = require('../data/friend.js');

module.exports = function (app) {
    app.get('/api/friend', function (req, res) {
        res.json(friendData);
    })

    app.post('/api/friend', function (req, res) {
        console.log(req);
        res.send(friendData);
    })
}