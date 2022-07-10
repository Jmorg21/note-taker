const router = require('express').Router();
const { createNewNotes } = require('../Develop/db/notes');
const newNotes  = require('../Develop/db/db.json');

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

module.exports = router;