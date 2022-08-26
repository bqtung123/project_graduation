const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const path = require('path');
const route = require('./routes');
app.use(express.static(path.join(__dirname, 'public')));
const db = require('./config/db');
const { spawn } = require('child_process');
var fs = require('fs');
// Connect to db
db.connect();

//template engine
const hbs = handlebars.create({
    extname: '.hbs',
    helpers: {
        image: (a) => {
            if (a == 'Tripadvisor.com')
                return ' <img src="https://play-lh.googleusercontent.com/SOHKWI6RznrRqWVUSb6THa2bJNQPvjOTLsd4CSad_GCahf2fe2p4vE8FOKjtuudmL6E=s180-rw" alt="Course Item">';
            if (a == 'Booking.com')
                return ' <img src="https://play-lh.googleusercontent.com/eJuvWSnbPwEWAQCYwl8i9nPJXRzTv94JSYGGrKIu0qeuG_5wgYtb982-2F_jOGtIytY=s180-rw" alt="Course Item">';
            if (a == 'Chudu24.com')
                return ' <img src="https://is4-ssl.mzstatic.com/image/thumb/Purple126/v4/98/b0/8f/98b08f25-f96d-4847-f023-20b682781e83/source/512x512bb.jpg" alt="Course Item">';
        },
        compare: (a, b) => {
            if (a !== b) return '<a href="?page=' + b + '">' + b + '</a>';
        },
        compareTo: (a, b) => {
            if (a !== b) return '<a onclick="getURL(' + b + ');">' + b + '</a>';
        },
        display3DotsPrevious: (a, b) => {
            if (a !== b - 1 && a !== b) return '...';
        },
        display3DotsLast: (a, b) => {
            if (a !== b + 1 && a !== b) return '...';
        },
        warn: (a, b) => {
            return a.find((e) => e.param === b) ? 'invalid' : '';
        },
        sum: (a,b) => a+b,
    },
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// template engine

// crawl data
app.get('/pipelineComment', (req,res, next) => {

    const child = spawn('scrapy',["crawl","example","-O","comment.json"],{cwd: 'C:/Users/FPTSHOP/OneDrive - Hanoi University of Science and Technology/Desktop/project/comment/'})
  
    child.stdout.on('data', (data)=> {
      console.log(`stdout: ${data}`)
    })
    
    
    child.stderr.on('data', (data)=> {
      console.log(`stderr: ${data}`)
    })
    
    child.on("error", (error) => console.log(`error: ${error.message}`))
    
    child.on('close', (code) => {
      console.log(`Crawling data closed with code ${code}`);
      next();
    });
  }, (req,res, next) => {
    const child = spawn('python',["analys.py"],{cwd: 'C:/Users/FPTSHOP/OneDrive - Hanoi University of Science and Technology/Desktop/project/processing_data'})
    
    child.stdout.on('data', (data)=> {
      console.log(`stdout: ${data}`)
    })
    
    child.stderr.on('data', (data)=> {
      console.log(`stderr: ${data}`)
    })
    
    child.on("error", (error) => console.log(`error: ${error.message}`))
    
    child.on('close', (code) => {
      console.log(`Analysing data closed with code ${code}`);
      next();
    })
  
  },async (req, res) => {
  
    var filePath = 'C:/Users/FPTSHOP/OneDrive - Hanoi University of Science and Technology/Desktop/project/comment/comment.json';
    if (fs.existsSync(filePath)) {
     await fs.unlinkSync(filePath);
      console.log('Deleted file completed');
    }
    else {
     console.log('not found file');
    }
    console.log('Pipeline terminated');
  
    res.redirect('/admin');
  })

route(app);

app.listen(3000);
