// const express = require('express')
import express from 'express'
import 'dotenv/config'
import fs from 'fs/promises'
const port = process.env.PORT;
const app = express();
app.use(express.json())
app.get('/',(req,res)=>{
    res.json({message: 'Response from server'})
})
app.post('/signup',async (req,res) => {
   try{
        // const data = req.body;
        const {firstName, lastName, email, password} = req.body;
        const userList = JSON.parse(await fs.readFile('data/user.json','utf-8'));
        if(!firstName || !lastName || !email || !password){
            res.json({
                message: "All info are required for signup"
            });
            return;
        }
        const existingUser = userList.find(u => u.email === email);
        if(existingUser){
            res.json({
                message: "Email already exist"
            });
            return;
        }
        const newUser = {
            "id": userList.length + 1,
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password,
            "role": "student"
        }

        userList.push(newUser);
        await fs.writeFile('data/user.json',JSON.stringify(userList,null,2));
        res.json({
            message: "New user created successfully",
            data: newUser
        })
   }
   catch(err){
        console.log(err);
   }
   
})
app.listen(port, ()=> {console.log(`Server Running on port ${port}`)})