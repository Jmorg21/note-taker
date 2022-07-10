const router = require('express').Router();
const { createNewNotes } = require('../db/index');
const newNotes  = require('../db.json');

router.get('/notes', (req, res) => {
    let results = newNotes ;	
    if (results) {	
      res.json(results);	
    } else {	
      res.send(err);	
    }
});


router.post('/notes', (req, res) => {	
    const notes = createNewNotes(req.body, newNotes);	
    res.json(notes);	    
});