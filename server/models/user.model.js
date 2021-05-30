const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first: {
        type: String,
        trim: true, 
        required:true,
    },
    last: {
        type: String,
        trim: true,
        required:true,
    },
    username: {
        type: String,
        trim: true,
        required: "Username is Required"
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        // match: [/.+@.\..+/, "Please Enter a valid e-mail address"],
        required: "Email is Required",
    },
    password: {
        type: String,
        required: "Password is Required",
        minlength: 5
    },
    cartNumber: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SavedCart'
        }
    ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;