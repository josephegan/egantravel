var express = require('express')
var app = express();

app.use(express.static(__dirname + '/public'));

var fortunes = [

   "Conquer your feers or they will conquer you.",
   "Rivers need springs",
   "Do not fear what you do not know",
   "You will have a pleasent surprise",
   "Whenever possible, keep it simple"

];
var handlebars = require('express-handlebars').create({defaultLayout:'main'});;



app.get('/', function (req, res) {
   
  res.render('home');
});

app.get('/about', function(Req,res){
    var randomFortune = fortunes[Math.floor(Math.random() 
* fortunes.length)];
res.render('about', {fortune: randomFortune });
});

//custom 404
app.use(function (req, res) {
    res.status(404);
    res.render('404');
})


//custom 500

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500);
   res.render('500');
})


app.set('port', process.env.PORT || 3000);

var port = app.get('port');

//set up handlebarss

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.listen(port, function(){
    console.log('Express started on http://localhost:' + port
    + '; press cntr-c to kill it');
})


