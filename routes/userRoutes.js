import express from "express";
import { registerUser, loginrUser, currentUser } from "../controllers/userController.js"
import validateToken from "../middleware/validateTokenHandler.js";

const router = express.Router();

router.post("/register", registerUser)


router.post("/login", loginrUser)


router.get("/current", validateToken, currentUser)


export default router;

