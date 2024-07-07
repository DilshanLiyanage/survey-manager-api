import asyncHandler from "express-async-handler";
// with the help of asyncHandler middleware we don't need to manually handle using try-catches
// it all routes to our own error handler midleware 



//@desc Get all surveys
//@route Get /api/v1/surveys
//@access Public
const getAllSurveys = asyncHandler(async (req, res)=>{
    res.status(200).json({message:"Get all"});
});

//@desc Get a survey
//@route Get /api/v1/surveys/:id
//@access Public
const getASurvey = asyncHandler(async (req, res)=>{
    res.status(200).json({message:`get ${req.params.id}`});
});

//@desc Save a survey
//@route Post /api/v1/surveys
//@access Public
const saveSurvey = asyncHandler(async (req, res)=>{
    const {title, desc} = req.body;
    if(!title || !desc){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(201).json({message:"create one"});
});


//@desc Update a survey
//@route Put /api/v1/surveys/:id
//@access Public
const updateSurvey = asyncHandler(async (req, res)=>{
    res.status(200).json({message:`update ${req.params.id}`});
});

//@desc Delete a surveys
//@route Delete /api/v1/surveys/:id
//@access Public
const deleteSurvey = asyncHandler(async (req, res)=>{
    res.status(200).json({message:`delete ${req.params.id}`});
});


export { getAllSurveys, getASurvey, saveSurvey, updateSurvey, deleteSurvey };