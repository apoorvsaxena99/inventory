const express=require('express');
const app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/',require('./routes/productRoute'));
var port=3000 || process.env.PORT;
app.listen(port,()=>{
    console.log('Server is Running');
})
