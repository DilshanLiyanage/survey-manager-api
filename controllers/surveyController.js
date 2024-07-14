// with the help of asyncHandler middleware we don't need to manually handle using try-catches
// it all routes to our own error handler midleware 
import asyncHandler from "express-async-handler";
import Survey from "../models/surveyModel.js";


//@desc Get all surveys
//@route Get /api/v1/surveys
//@access Private
const getAllSurveys = asyncHandler(async (req, res)=>{
    const survey = await Survey.find({user_id: req.user.id});
    res.status(200).json(survey);
});

//@desc Get a survey
//@route Get /api/v1/surveys/:id
//@access Private
const getASurvey = asyncHandler(async (req, res)=>{
    const fetchedSurvey = await Survey.findById({_id:req.params.id, user_id: req.user.id});
    if(!fetchedSurvey) {
        res.status(404);
        throw new Error("Survey not found.");
    }
    res.status(200).json(fetchedSurvey);
});

//@desc Save a survey
//@route Post /api/v1/surveys
//@access Private
const saveSurvey = asyncHandler(async (req, res)=>{
    const {title, desc, author} = req.body;
    if(!title || !desc || !author) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const savedSurvey = await Survey.create({
        title, 
        desc, 
        author,
        user_id: req.user.id,
    })
    res.status(201).json(savedSurvey);
});


//@desc Update a survey
//@route Put /api/v1/surveys/:id
//@access Private
const updateSurvey = asyncHandler(async (req, res)=>{
    const fetchedSurvey = await Survey.findById({_id: req.params.id, user_id: req.user.id});
    if(!fetchedSurvey) {
        res.status(404);
        throw new Error("Survey not found.");
    }

    const updatedSurvey = await Survey.findByIdAndUpdate(
        {_id:req.params.id, user_id: req.user.id},
        req.body,
        {new: true}
    );
    res.status(200).json(updatedSurvey);
});

//@desc Delete a surveys
//@route Delete /api/v1/surveys/:id
//@access Private
const deleteSurvey = asyncHandler(async (req, res)=>{
    const fetchedSurvey = await Survey.findById({_id: req.params.id, user_id: req.user.id});
    if(!fetchedSurvey) {
        res.status(404);
        throw new Error("Survey not found.");
    }

    await Survey.findByIdAndDelete({_id: req.params.id, user_id: req.user.id});

    res.status(200).json(fetchedSurvey);
});


export { getAllSurveys, getASurvey, saveSurvey, updateSurvey, deleteSurvey };