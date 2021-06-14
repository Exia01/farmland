const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        trim: true, 
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
    role:{
        type:String,
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