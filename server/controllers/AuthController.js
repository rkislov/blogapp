const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/Users')

module.exports = {
    login: (email, password, callback)=>{
        User.findOne({email: email}, (err, user)=>
        {
            if(err){
                callback(err,null)
            }

            if(!user){
                callback(err,null)
            } else {
                user.comparePassword(password, (err, isMatch)=>{
                    if(err){
                        callback(err,null)
                        return
                    }
                    if(isMatch){
                        var authToken = jwt.sign({name: user.name, _id: user._id}, process.env.JWTSECRET)
                        callback(null,authToken)
                    } else {
                        callback(err,null)
                    }
                })
            }
        })
    },
    register: (name,email,password,callback) =>{
        const newUser = new User({name,email,password})

        newUser.save((err,user) => {
            if(err){
                callback(err,null)
                return
            }
        })

        var authToken = jwt.sign({name: user.name, _id: user._id}, process.env.JWTSECRET)
        callback(null,authToken)
    }

}