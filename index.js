var express=require('express');
var mongodb=require('mongodb');
var MongoClient=mongodb.MongoClient;
var dbUrl="mongodb://127.0.0.1:27017"
var dbName="pizzaapp";
const app=express()
app.use(express.json())
var cors = require('cors');
app.use(cors());

app.get('/pizza',(req,res)=>{
    database.collection('allpizza').find({}).toArray((err,data)=>{
        if (err) throw err
        res.json(data)
        console.log(data)
    })
})

app.get('/ingredients',(req,res)=>{
    database.collection('ingredients').find({}).toArray((err,data)=>{
        if (err) throw err
        res.json(data)
    })
})

app.listen(5000,()=>{
    MongoClient.connect('mongodb://127.0.0.1:27017',{useNewUrlParser:true},(error,data)=>{
        if(error)throw error
        database=data.db("pizzaapp")
        console.log('connection successfull')
    })
})

