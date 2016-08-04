module.exports = function(app, fortunes){

var randomFortune = fortunes[Math.floor(Math.random() 
* fortunes.length)];

app.get('/', function (req, res) {
   
  res.render('home');
});

app.get('/about', function(Req,res){
    
res.render('about', randomFortune);
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
}
