var menus = require('./data/restaurantsMenus.json');
var users = require('./data/users.json');
var express = require('express')
var cors = require('cors');
var app = express();

app.use(cors());

app.use(express.json());

app.get('/menus', function (req, res) {
    const start = parseInt(req.query.start);
    const limit = parseInt(req.query.limit);

  res.send(JSON.stringify({
    start,
    limit,
    count: 187,
    results: menus
  }));
});

app.post('/login', function (req, res) {
    var userInfo = users.filter(user => user.login == req.body.login && user.password == req.body.password);
    if(userInfo.length > 0) {
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.end(JSON.stringify(userInfo[0]));

        return;
    }
})

var port = 3001;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})