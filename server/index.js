const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 5000;

require('dotenv').config();

const User = require('./routes/UserRoutes');
const Session = require('./routes/SessionRoutes');

const DB = process.env.DATABASE;

app.use(cors());
app.use(express.json());

mongoose.connect(DB)
.then(()=> {
    console.log('database connected')
})
.catch((err)=> {
    console.log(err);
})

app.use('/api/user/', User);
app.use('/api/session/', Session);


if(process.env.NODE_ENV==='production'){
    app.use(express.static("client/build"));
    const path=require("path");
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}

app.listen(port, ()=> {
    console.log('listening on port', port)
})
