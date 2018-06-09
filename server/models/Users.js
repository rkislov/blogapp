const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const SALT_WORK_FACTOR = 10

const UserSchema = new Schema({
    name: {
        type: String,
        index: {unique: true}
    },
    email: {
        type: String,
        unique: true,
    },
    password: String,
    created: {
        type: Date,
        required: true,
        default: new Date()
    }
})

UserSchema.methods.comparePassword = function comparePassword(password, callback) {
    bcrypt.compare(password, this.password, callback)
}

UserSchema.pre('save', function saveHook(next) {
    const user = this

    if(!user.isModified('password')) {
        return next()
    }

    return bcrypt.genSalt(SALT_WORK_FACTOR, (err,salt)=>{
        if(err){ return next(err)}

        return bcrypt.hash(user.password, salt, (err, hash)=>{
            if(err){
                return next(err)
            }
            user.password = hash
            return next()
        })
    })
})

module.exports = mongoose.model('User', UserSchema)