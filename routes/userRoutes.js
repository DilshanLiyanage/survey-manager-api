import express from "express";
import { registerUser, loginrUser, currentUser } from "../controllers/userController.js"

const router = express.Router();

router.post("/register", registerUser)


router.post("/login", loginrUser)


router.get("/current", currentUser)


export default router;

