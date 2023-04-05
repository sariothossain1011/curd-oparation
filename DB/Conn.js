const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
const URL = process.env.DATABASE;
mongoose.connect(URL).then(()=>{
    console.log('MongoDB database connection successfully')
}).catch((error)=>{
    console.log('MongoDB database connection fail',error)
})