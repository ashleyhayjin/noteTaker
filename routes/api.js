const express = require ("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();

router.get('/api/notes', (req, res) => {
    fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", function(err, data){
        console.log(err);
        console.log(data);
        if (err) {res.json([])};
        res.json(data);
    }); 
})

router.post('/api/notes', (req, res) => {
    fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(req.body), function(){     
        res.send("note saved");
    })
})
module.exports = router;