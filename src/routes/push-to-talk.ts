import express from "express";

import checkIfAdmin from "../middleware/is-admin";
import Push2TalkController from "../controller/push-to-talk";

const router = express.Router();

router.get("/report/:chatId", checkIfAdmin, Push2TalkController.generateReport);
