const express = require('express');
const bodyParser = require('body-Parser');
const path = require('path');
const expressValidator = require('express-validator');
const mustacheExpress = require('mustache-express');
const models = require('./models');
const data = require("./data.js");
const app = express();


app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.use(express.static('public'));
app.set('view engine', 'mustache');
app.use(expressValidator());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// const task = models.User.build({
//   item: 'Schwinn Exercise Bike',
//   desc: 'Schwinn stationary bike in excellent condition.',
//   value: 150
// })
//
// task.save().then(function(newTask){
//   console.log(newTask)
// })

app.get('/', function (req, res, next){
  models.User.findAll().then(function(item){
    res.render('index', {listitem: item})
  })
});

app.post("/", function (req, res) {

  let task = models.User.build({
    item: req.body.toSell,
    desc: req.body.desc,
    value: req.body.Value,
  })

  task.save().then(function(newTask){
    console.log(newTask)
  })
  res.redirect('/');
});

app.listen(3000, function () {
  console.log('Successfully started express application!');
});
