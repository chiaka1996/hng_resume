const formDetails = require('../Models/contactForm');

exports.contactDetails = (req, res) => {
    try{
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;
        const nameRegex = /^[a-z]+/i;
        const {name, email, message} = req.body;

        if(!name || !email || !message){
            return res.status(400)
            .json({
                statusCode: 400,
                message: 'please fill all fields'
            })
        }

        if(!emailRegex.test(email)){
            return res.status(400)
            .json({
                statusCode: 400,
                message: "incorrect email address"
            })
        }

        if(!nameRegex.test(name)){
            return res.status(400)
            .json({
                statusCode: 400,
                message: "incorrect name"
            })
        }

        const saveDetails = new formDetails ({
            name,
            email,
            message
        })

        saveDetails.save()
        .then(() => {
            res.status(201)
            .json({
                statusCode: 201,
                message: "message sent successfully"
            })
        })

    }
    catch(error){
        return res.status(500)
        .json(error)
    }
    }