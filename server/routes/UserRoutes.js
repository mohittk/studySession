const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/User');
const RegistrationForSession = require('../models/RegisSession');
const Session = require('../models/Session');


router.post('/auth', async (req, res) => {
    const token = req.body.token;
    try {
        const decoded = jwt.verify(token, 'bearer');
        const user = User.findOne({_id: decoded.id});
        return res.json({
            "message" : "authenticated user"
        });
    } catch (err) {
        console.error(err);
        return res.json({"message" : "not authenticated "});
    }
})

router.post('/signup', async (req, res) => {
    let {email, password, name} = req.body;

    const result = await User.findOne({email});
    if(result) {
        return res.json({"message": "Email ID already exists"});
    }
    else{
        var hash = bcrypt.hashSync(password, 8);
        password = hash;
        const user = new User({email, password, name});

        user.save(function(err, document){
            if(err) {
                console.log(err);
                return res.json({"message": "try again"});
            }
            else{
                return res.json({"message": "user registered successfully"});
            }
        })
    }

})


router.post('/login', async (req, res) => {
    const obj = req.body;
    const result = await User.findOne({email: obj.email});

    if(result) {
        bcrypt.compare(req.body.password, result.password, function(err, hashed) {
            if(hashed == true) {
                const token = jwt.sign({id: result._id}, "studyapp");
                return res.json({"message": "login success", "token" : token});

            }
            else{
                return res.json({"message": "login failed"});
            }
        })
    }
    else{
        return res.json({"message": "login failed"});
    }
})

router.post('/registerSession', async (req, res) => {
    const { user_id, session_id} = req.body;

    const registerForSession = new RegistrationForSession({
        user_id, session_id
    })


    const getIdOfSession = session_id;
    console.log(getIdOfSession);
    const findFromSessions = await Session.findOne({_id: session_id});
    console.log(findFromSessions.maxStudentAllowed);

    if(findFromSessions.alreadyRegistered < findFromSessions.maxStudentAllowed){
        findFromSessions.alreadyRegistered += 1;
        console.log(findFromSessions.alreadyRegistered);

        findFromSessions.save(function (err, document){
            if(err){
                console.log('line 91' + err);

                return res.json({"message" : "try again"});
            }

            registerForSession.save(function(err, document){
                if(err){
                    console.log('this line' + err);
                    return res.json({"message" : "try again"});
                }
        
            })
    
            return res.json({"message": "updated data succesfully"});
        })
 
            
        
    }
    else{
        return res.json({"message": "some error occured"});  
    }

      
})



module.exports = router;