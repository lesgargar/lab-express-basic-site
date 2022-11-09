const express = require("express");
const app = express();
app.use(express.static("public"));

app.get('/', (request, response, next) => {
    response.sendFile(__dirname + "/views/home.html")
   
}); 

app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + "/views/about.html")
});

app.get('/gallery', (request, response, next) => {
    response.sendFile(__dirname + "/views/gallery.html")
});

app.get("*",(req, res)=>{
    res.send("<h1>oh no!! 404 not found</h1>")
})

app.listen(3000, ()=>{
    console.log("server ready in port 3000");
})