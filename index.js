const express = require('express');
let mongoose = require('./config');
let express = require('express');
let app = express()

let userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

let userModel = new mongoose.model('user', userSchema);

app.use(express.json())

app.post('/signup', async (req, resp) => {

    let data = new userModel(req.body);
    let result = await data.save();
    resp.send("Data save successfully");
})

app.post('/login',async (req,resp)=>{

    let check = req.body;
    let data = await userModel.find({name:check.name,password:check.password})
    console.log(data);
    
})

app.get('login')

app.listen(2500);