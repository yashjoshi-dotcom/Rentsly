const express= require('express');
const app=express();
const port=process.env.PORT || 3000;
require('../src/db/conn');

const ranks=require('./models/userSchema');
app.use(express.json());
app.use(require('./router/auth'));


app.listen(port,()=>{
console.log('Server is running');
});                             