const express = require ("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();

router.get('/api/notes', (req, res) => {
    fs.readFile(path.join(__dirname, "..//db.json"), "utf8", function(req, res){
        res.json(data);
    }); 
})

router.post('/api/notes', (req, res) => {
    fs.writeFile(path.join(__dirname, "../db.json"), JSON.stringify(req.body), function(){     
        res.send("note saved");
    })
    const newNote = req.body;

})
module.exports = router;