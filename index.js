console.log("Welcome")

const express = require('express')

const app = express()

// Note : bodyparser is deprecated
// const bodyParser = require('body-parser')

// app.use(bodyParser.urlencoded({extended:false}))
// app.use(bodyParser.json())

app.use(express.urlencoded({extended:false}))
app.use(express.json())

const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017",{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
.then(console.log('Mongodb connected'))
.catch((err) => console.log(err))

const Employee = require('./models/Users')
 
app.post("/add",(req,res) => {
    //res.send("Hellow")

    const emp1 = new Employee({
        username:req.body.username,
        password:req.body.password
    })
    emp1.save().then((emp1) => res.json(emp1)).catch((err) => res.json(err))
})

app.get("/employees",(req,res) => {
    Employee.find().then((emp) => res.json(emp)).catch((err) => res.json(err))
})

port = process.env.PORT || 5000
app.listen(port, ()=> {
    console.log("Hellow")
})