const mongoose = require('mongoose');

const bcrypt = require('bcrypt')
const validator = require('validator')
const UserSchema = new mongoose.Schema({
    firstName : {
        type: String,
        require:[true,'{PATH} is Required']
    },
    lastName : {
        type: String,
        require:[true,'{PATH} is Required']
    },
    social : {
        type : String,
        require:[true,'{PATH} is Required']

    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique : true
        
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    }
}, { timestamps: true });




UserSchema.statics.signup = async function(firstName,lastName,social,email, password) {
    //validation
    if (!firstName) {
        throw Error('First name is required!')
    }
    if (!lastName) {
        throw Error('Last name is required!')
    }
    if (!social ) {
        throw Error('SSN is required!')
    }
    if (social.length < 4) {
        throw Error('SSN must be 4 characters')
    }
    if (!email ){
        throw Error('Email is required!')
    }
    if (!password ){
        throw Error('Password is required!')
    }
    if (!validator.isEmail(email)) {
        throw Error('Email is not valid!')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password must contain 1 uppercase, 1 special character!!')
    }
    // in order for the word THIS to work, this need to be a regular function instead of the arrow function
    const exists = await this.findOne({ email })
    if (exists) {
        throw Error('Email already in use!')
    }

    const salt = await bcrypt.genSalt(10)

    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({firstName:firstName,lastName:lastName,social:social, email : email, password: hash })

    return user
}

//static login method
UserSchema.statics.login= async function(email,password) {
    if (!email || !password ){
        throw Error('All fields must be filled')
    }
    const user = await this.findOne({ email })
    if (!user) {
        throw Error('Incorrect email')
    }

    const match = await bcrypt.compare(password , user.password)

    if (!match){
        throw Error('Incorrect password')
    }
    return user


}


module.exports =  User = mongoose.model('user', UserSchema);


