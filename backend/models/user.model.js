import mongoose, { mongo } from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            require: true,
            unique: true,
        },
        fullName:{
            type: String,
            require: true,
        },
        password:{
            type: String,
            require: true,
            minLength: 6,
        },
        email:{
            type: String,
            require: true,
            unique: true,
        },
        followers:[
            {
                type: mongoose.Schema.Types.ObjectId, //reference to user model which had 16 characters
                ref: "User",
                default: []
            }
        ],
        following:[
            {
                type: mongoose.Schema.Types.ObjectId, //reference to user model which had 16 characters
                ref: "User",
                default: []
            }
        ],

        profileImg:{
            type: String,
            default: "",
        },
        coverImage:{
            type: String,
            default: "",
        },
        Bio:{
            type: String,
            default: "",
        },
        link:{
            type: String,
            default: "",
        },
    },
{timestamps: true}
);

const User = mongoose.model("User",userSchema); //users in database

export default User;