import express from "express";
import { getAllSurveys, getASurvey, saveSurvey, updateSurvey, deleteSurvey } from "../controllers/surveyController.js";


const router = express.Router();

router.route("/").get(getAllSurveys);

router.route("/:id").get(getASurvey);


router.route("/").post(saveSurvey);

router.route("/:id").put(updateSurvey);

router.route("/:id").delete(deleteSurvey);


export default router;