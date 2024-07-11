import mongoose from 'mongoose';

const surveySchema = mongoose.Schema(
{
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