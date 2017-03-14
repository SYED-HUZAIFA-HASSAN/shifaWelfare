let http = require('http');
let path = require('path');
let serveStatic = require('serve-static');

let express = require('express');
let app = express();


app.set('views', './views');
app.set('view engine', 'pug');

app.use('/', serveStatic('./public'));

app.get('/', (req, res) => {
    res.render('index', {
        head: { 
            title: 'Shifa Social Welfare Association | Every Smile Matters'
        },
    })
});
app.get('/who-we-are', (req,res) => {
    res.render('who-we-are',  {
        head: {
            title: 'Shifa Social Welfare Association | Every Smile Matters'
        }
        
    })
})

app.get('/donate', (req,res) => {
    res.render('s-donation',  {
        head: {
            title: 'Shifa Social Welfare Association | Every Smile Matters'
        }
        
    })
})
app.get('/event-gallery', (req,res) => {
    res.render('event-gallery',  {
        head: {
            title: 'Shifa Social Welfare Association | Every Smile Matters'
        }
        
    })
})
app.get('/get-help', (req,res) => {
    res.render('get-help',  {
        head: {
            title: 'Shifa Social Welfare Association | Every Smile Matters'
        }
        
    })
})
app.get('/volunteer', (req,res) => {
    res.render('volunteer',  {
        head: {
            title: 'Shifa Social Welfare Association | Every Smile Matters'
        }
        
    })
})
let server = http.createServer(app);
server.listen(2199,'192.168.8.96', () => {
    console.log(server.address())
})