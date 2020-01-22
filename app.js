let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let mongoose = require('mongoose');
let nunjucks = require('nunjucks');

let key = require('./config/key')

const app  = express();
app.use(cors());

 mongoose.connect(key.dbConfig,{
     useNewUrlParser:true,
      useUnifiedTopology: true 
 })
 .then(()=>{
     console.log('Database connected')
 })
 .catch(err=>{
     console.log(err)
 })

app.get('/',(req,res)=>{
    var nombre = "fsdfvds"
    return res.render('base.html',{nombre:nombre})
})
app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

app.use(express.static('views'))
app.use(express.static('views/app/404'))

app.use('/evenement',require('./controller/evenementController'))


const PORT = process.env.PORT || 4000

var env = nunjucks.configure('views',{
    autoescape:true,
    express:app
})
app.get('*',(req,res)=>{
    return res.render('app/404/index.html')
})

app.listen(PORT,()=> {
    console.log('Serveur connecte');
});
