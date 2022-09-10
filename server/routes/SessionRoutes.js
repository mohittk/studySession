const express = require('express');
const router = express.Router();
var randomstring = require("randomstring");
const Session = require('../models/Session');

router.post('/createSession', async (req, res) => {
    let {title, subject, startDate, endDate, maxStudentAllowed} = req.body;
    let alreadyRegistered = 0;

    const session = new Session({
        title, subject, startDate, endDate, maxStudentAllowed, alreadyRegistered
    })
    session.save(function (err, document){
        if(err){
            console.error(err);
            return res.json({"message": "try again"});
        }

        return res.json({"message": "posted session successfully "});
    })
})

router.post('/getSessions', async(req, res) => {
   let sessionPosted = await Session.find();
   if(sessionPosted.length > 0){
       let obj = sessionPosted;
       return res.json({"message": obj})
   }
   return res.json({"message": "No sessions found"});
})



module.exports = router;