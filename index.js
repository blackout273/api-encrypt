const express = require('express');
const app = express();
const bcrypt = require('bcrypt')
const cors = require('cors')
// CORS config
app.use(cors({
    origin: "*"
  }))
app.use(express.json())
app.post("/",((req,res)=>{
    const saltRounds = 10;
    console.log("tick")
    bcrypt.hash(req.body.userPassword, saltRounds, function(err, hash) {
        res.send(hash)
    });
}))

app.post("/compare",((req,res)=>{
    bcrypt.compare(req.body.userPassword, req.body.hash, function(err, result) {
        res.send(result)
    });
}))

app.listen({port:3000},()=>console.log(`Running AT 3000`))