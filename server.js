require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.APP_PORT;

//new
const db = require("./app/models"); //defalut file >> index.js
db.sequelize.sync({force: true}).then(() => (
    console.log('database sync sanc sunc')  //display message when u can sync database
));

app.get('/', function(req, res){
    res.send('ในวันที่ผมล้ม ผมยืน');
});

app.listen(PORT, function(){
    console.log(`Server is running on port ${PORT}`);
});