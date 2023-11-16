const express = require('express')
const app = express()
const port = 3001
const mongoose = require('mongoose');
const cors=require ('cors');
const UserSchema =require('./model/user.js')
app.use(express.json())
app.use(cors());

// app.use("/users" , userRounter)

// mongodb+srv://vijeths:AXZqEhbILG14Bh3E@cluster0.h9ppyhg.mongodb.net/?retryWrites=true&w=majority
mongoose.connect( "mongodb+srv://vijeths:AXZqEhbILG14Bh3E@cluster0.h9ppyhg.mongodb.net/?retryWrites=true&w=majority" )
.catch((error)=>{
  console.log(error)
})

app.post('/',(req,res)=>{
  const{email,password} = req.body;
  UserSchema.findOne({email:email})
  .then(user => {
    if(user) {
      if(user.password == password){
        res.json("Success")
      }
      else{
        res.json("Password is incorrect")
      }
    }
    else{
      res.json("No record exists")
    }
  })
})


app.get('/', (req, res) => {
  res.send('Hello Janu!')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

