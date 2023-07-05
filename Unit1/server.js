import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bodyParser from 'body-parser';

const app= express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(bodyParser.urlencoded({extended:true}));
const port=3008;
app.get('/',(req,res)=>{
    res.sendFile(__dirname +"/bmicalculater.html");
})
app.post('/',(req,res)=>{
    var weight=Number(req.body.weight);
    var height=Number(req.body.height)/100;
    const result = weight/(height*height);
    res.send("Your BMI  is :" + result.toFixed(2) );
})
app.listen(port,()=>{
    console.log(`Example app listening the port ${port}`)
})
