import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
{
    username: {
        type: String,
        required: [true, "Please add username."]
    },
    email: {
        type: String,
        required: [true, "Please add email."],
        unique: [true, "Email address already be taken"]
    },
    password: {
        type: String,
        required: [true, "Please add password."]
    },
},
{
    timestamp: true
}
);

export default mongoose.model("User", userSchema);