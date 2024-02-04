//imports
const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');
const mongo = require('mongodb').MongoClient;

//basic database object with key:value pairs
const nutrient = {
  'vitamin c':{
    'type': 'Vitamin',
    'weight': 1,
    'mUnit': 'mg'
  },
  'vitamin e':{
    'type': 'Vitamin',
    'weight': 1,
    'mUnit': 'mg'
  },
  'iron':{
    'type': 'Mineral',
    'weight': 1,
    'mUnit': 'mg'
  }
};

//Testing MongoDB Atlas connection
require('dotenv').config();


let db;
let dbConnectionStr = process.env.DB_CONNECT;
let dbName = 'NutrientRank';
console.log(dbConnectionStr);
mongo.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    });


app.get('/',async (request, response)=>{
    const nutrient = await db.collection('Nutrients').find().toArray();
    response.render('index', { items: nutrient});
});

//express modules to use
//app.use('app engine', ejs)
app.use(cors());
app.use(express.static('public'));
app.set('views', './views')
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//request for main page; returns index.html to view in browser
app.get('/', (req, res) => {
  //res.sendFile(__dirname + '/html/index.ejs')
  res.render('html/index.ejs', { items: nutrients });
});

//API requests, returns the database object
app.get('/api', (req, res) => {
  res.json(nutrient);
});

//API request for specific key:value datapoint for the client-side input form
app.get('/api/:nutrient', (req, res) => {
  console.log(req.params);
  const nutrientType = req.params.nutrient.toLowerCase();
  if (nutrient[nutrientType]){
    res.json(nutrient[nutrientType]);
  }
  else{
    return "Nutrient doesn't exist";
  }
});

//assign server listener to specific port
app.listen(process.env.PORT || PORT, () => {
  console.log(`CONFIRMATION: Server is running on ${PORT}.`);
});
//const http = require('http');
//const fs = require('fs');
//const url = require('url');
//const querystring = require('querystring');
// const server = http.createServer((req, res) => {
//   const page = url.parse(req.url).pathname;
//   const params = querystring.parse(url.parse(res.url).query);
//   console.log(page);
//   if (page == '/'){
//     fs.readFile(/html/index.html, function(err, data){
//       res.whiteHead(200, {'Content-Type':'text/html'});
//       res.write(data);
//       res.end();
//     });
//   };
// });
