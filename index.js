var express=require('express');
var app=express();
const port=8080
app.listen(port,()=>{
    console.log('server is running on part${port}.');
});
app.get('/',function (req,res) {
    res.send('<h1>helloworld for 2011CS010123')
})