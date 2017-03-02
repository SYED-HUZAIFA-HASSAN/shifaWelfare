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
app.get('/contact-us', (req,res) => {
    res.render('contact-us',  {
        head: {
            cssPath: "css/contact-us.css", 
            title: 'Steamin Mugs - Karachi'
        }
        
    })
})

app.get('/About-Us', (req,res) => {
    res.render('About-Us',  {
        head: {
            cssPath: "css/About-Us.css", 
            title: 'Steamin Mugs - Karachi'
        }
        
    })
})
let server = http.createServer(app);
server.listen(2199, '192.168.1.4', () => {
    console.log('connection established')
})