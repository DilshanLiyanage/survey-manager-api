import mongoose from 'mongoose';

const surveySchema = mongoose.Schema(
{
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    title: {
        type: String,
        required: [true, "Please add title for survey."]
    },
    desc: {
        type: String,
        required: [true, "Please add title for survey."]
    },
    author: {
        type: String,
        required: [true, "Please add title for survey."]
    }
}, 
{
    timestamps: true 
}
);

export default mongoose.model("Survey", surveySchema);