const Raid = require('./lib/raid');
const config = require('./config');

global.token = config.token;


const express = require('express');
const app = new express();
const port = 8000;

app.use('/website',express.static('public'));

app.get('/raid/:userName', (req, res) => { 
    const { userName }= req.params
    const myRaid = new Raid(userName);
    myRaid.process()
    .then((characters)=>{
        res.send(characters);
    }).catch((e) =>{
        res.send({
            message:"User not found"
        });
    })  
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));


