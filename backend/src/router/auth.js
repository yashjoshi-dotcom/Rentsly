const express =require('express');
const router=express.Router();
const User= require('../models/userSchema');
const bcrypt =require('bcryptjs');
const jwt =require('jsonwebtoken');

router.get('/',(req,res)=>{
    res.send('Hello from auth');
});

/* Just some sample test code .
Not for production
app.post('/men',async (req,res)=>{
try{
    
    res.send("insertback"); 

    const newRecord = new ranks(req.body);
    consolelog(req.body);
  const insertback= await  newRecord.save();
    console.log('func');

}catch(e){
res.send(e);
}
})
 */
// Register the data of a new member into the DB
 router.post('/register',async (req,res)=>{

    const{name,email_id,gender,college_name,password,c_password}=req.body;
    if(!name|| !email_id  || !password || !c_password)
    {
        return res.status(409).json({error :"Plz enter all data"});
    }

    try
    {
        //Checking if Email Id already exists in the dB and if it exists returning message back 
        const userLogin = await User.findOne({email_id});
        if(userLogin) return res.json({message:"Email already exists"});

                
        const user =new User({name,email_id,gender,college_name,password,c_password});
        //Hashing the password and c_password with help of middle ware and bcrypt in db/conn.js
        //Callling save method to add the data to the database 
        await user.save();
        console.log(user);
        res.status(201).json({message :"registered sucessfully"});
    }
    catch(err){
        console.log(err);
    }
 });

 //Get the whole data from the database 
 router.get('/register',async (req,res)=>{

    const{name,email_id,gender,college_name,password,c_password}=req.body;
    try
    {
        const user =await User.find({});
        console.log(user);
        res.status(201).send(user);
    }
    catch(err){
        console.log(err);
    }
 });

//Get the data of an indiviual
router.get('/register/:id',async (req,res)=>{

    try
    {
        const _id= req.params.id;
        const single_user =await User.findById(_id);
        console.log(single_user);
        res.status(201).send(single_user);
    }
    catch(err){
        console.log(err);
    }
 });

 //Will handle patch request for an indiviual
 router.patch('/register/:id',async (req,res)=>{

    try
    {
        const _id= req.params.id;
        const single_user =await User.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        console.log(single_user);
        res.status(201).send(single_user);
    }
    catch(err){
        res.status(500).send(e);
        console.log(err);
    }
 });

  //Will delete data of  an indiviual
  router.delete('/register/:id',async (req,res)=>{

    try
    {
        const _id= req.params.id;
        const single_user =await User.findByIdAndDelete(_id);
        console.log(single_user);
        res.status(201).send(single_user);
    }
    catch(err){
        res.status(500).send(e);
        console.log(err);
    }
 });
//All above mentioned code is for registering a new user.
// The below mentioned code is for loging in.
router.post('/signin',async (req,res)=>{
   // console.log(req.body);
    //res.status(200).json({"message":"sent Successfullly"});

    try{
        const {email_id,password }= req.body;
        ///Checking if both email id and password is entered 
        if(!email_id || !password)
        {
            return res.status(400).json({error :"incomplete Data"});
        }
        //Checking if Email Id exists and if not request registering as a new account 
        const userLogin = await User.findOne({email_id});
        if(!userLogin) res.json({message:"Invalid Email ID. Pls register before signing in"});
        //Comparing the entered password with the one present in dB
        const isMatched= await bcrypt.compare(password,userLogin.password);
        //Generatig JWT authentication token
        const token = await userLogin.generateAuthToken();
        res.cookie('jwtoken',token,{
            expires: new Date(Date.now()+ 25892000000),//The cookie will expire in 30 days from the date the user had logged in .
            //The value above need to be provided in millisconds    
            httpOnly:true, //Else it will work only in secure
        });
        console.log(userLogin);
        if(isMatched) res.json({message:"Login Successful"});
        else res.json({message:"Invalid Credentials"});

    } catch(err)
    {
        console.log(err);
    }
})

/* 
Format of data Stored just for referece (not to be uploaded into repository)
_id: 62cd73ae68f0a559ec0c6025
ObjectId
name : updated yuvi   String
email_id : experts@gmail.com String
gender : male   String
college_name : Delhi Technological University String
password : 1234 String
c_password : 1234  String
__v : 0
 */

module.exports=router;