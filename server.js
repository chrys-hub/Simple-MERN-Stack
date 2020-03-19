const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const databaseUrl = require("./config/config.db");
//membuat app express
const app = express();

//passing url encoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
//requireing router
require('./routes/routing')(app);
//Konek ke database
mongoose.connect(databaseUrl.url, {
    useNewUrlParser: true,useUnifiedTopology:true
}).then(() => {
    console.log("Koneksi Database Berhasil");    
}).catch(err => {
    console.log('Koneksi Database Gagal Exit Program....', err);
    process.exit();
});
//testing routing
app.get('/', (req, res) => {
    res.json({"Testing": "Jir work"});
});
 var port=8080;
//listen di port 8080
app.listen(port, () => {
    console.log("Server berjalan di port 8080" );
});