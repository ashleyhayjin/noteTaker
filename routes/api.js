const express = require ("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();
let notes = require('../db.json');

router.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "../db.json"));
});

router.get('/api/notes/:id', (req,res) =>{
    let savedFile = JSON.parse(fs.readFileSync('../db.json', "utf8"));
    res.json(savedFile);
});

router.post('/api/notes', (req, res) => {
    fs.writeFile(path.join(__dirname, "../db.json"), JSON.stringify(req.body), function(){     
        res.send("note saved");
    })
    const newNote = req.body;

});
module.exports = router;