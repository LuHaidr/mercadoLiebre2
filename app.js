const express = require('express');
const path = require ("path")
const app = express();

// app.use(express.static('public'));
// app.set("puerto",process.env.PORT || 3001)

const PORT = process.env.PORT || 4000
const HOST = process.env.HOST || "localhost"

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname + '/views/home.html'));
});

app.get('/login', (req,res)=>{
    res.sendFile(path.resolve(__dirname + '/views/login.html'));
});

app.get('/register', (req,res)=>{
    res.sendFile(path.resolve(__dirname + '/views/register.html'));
});

app.get('/home', (req,res)=>{
    res.sendFile(path.resolve(__dirname + '/views/home.html'));
});

app.listen(app.get("PORT"), ()=>{
    console.log(`Server running at http://${HOST}:${PORT}/`);
});