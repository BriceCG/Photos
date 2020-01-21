let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let mongoose = require('mongoose')

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

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());

app.use('/evenement',require('./controller/evenementController'))

const PORT = process.env.PORT || 4000

app.listen(PORT,()=> {
    console.log('Serveur connecte');
});
