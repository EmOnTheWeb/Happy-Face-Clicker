const express = require('express');
const router = express.Router();
const face = require('../models/faces');

router.get('/frowns',(req,res) => {
  	face.getFrowns((err, faces)=> {
        if(err) {
            res.json({success:false, message: `Failed to fetch frowny faces. Error: ${err}`});
        }
        else {
            res.write(JSON.stringify({success: true, faces:faces},null,2));
            res.end();
    	}
    });
});

router.get('/smile',(req,res) => {
  	face.getSmile((err, faces)=> {
        if(err) {
            res.json({success:false, message: `Failed to fetch smiley face. Error: ${err}`});
        }
        else {
            res.write(JSON.stringify({success: true, faces:faces},null,2));
            res.end();
    	}
    });
});

router.post('/',(req,res) => {
  	
    let newFace = new face({
        path: req.body.path,
        status: req.body.status
    });
  
    face.addFace(newFace,(err, face) => {
        if(err) {
            res.json({success: false, message: `Failed to add face. Error: ${err}`});

        }
        else {
        	res.write(JSON.stringify({success: true, face:face},null,2));
        	res.end(); 
        }

    });
});

module.exports = router;