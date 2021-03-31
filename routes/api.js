const express = require ("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();
let notes = require('../db.json');

router.get('/api/notes', (req, res) => {
    console.log('Get request received');
    res.json(notes);
});

router.get('/api/notes/:id', (req,res) =>{
    let savedFile = JSON.parse(fs.readFileSync('../db.json', "utf8"));
    res.json(savedFile);
});

router.post('/api/notes', (req, res) => {
    req.body.id = notes.length;
    console.log(req.body)
    const newNote = req.body;
    notes.push(newNote);
    console.log(notes);
    fs.writeFile(path.join(__dirname, "../db.json"), JSON.stringify(notes), (err, res) => {
        if (err) throw err;
    })
    res.send("New Note has been created");
});

router.delete('/api/notes/:id', (req,res) => {
    console.log("Delete Works");
    let index;
    console.log(req.params.id);
    for(let i=0; i < notes.length; i++){
        console.log(notes[i].id === parseInt(req.params.id));
        if(notes[i].id === parseInt(req.params.id)){
            index = i;
        }
    }
    console.log("index", index);
    console.log(notes)
    console.log(req.params.id);
    notes.splice(index, 1);
    console.log(notes);
    fs.writeFile(path.join(__dirname, "../db.json", JSON.stringify(notes), (err, res) => {
        if (err) throw err;
    }))
})
module.exports = router;