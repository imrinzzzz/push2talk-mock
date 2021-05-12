import express from "express";

import checkIfAdmin from "../middleware/is-admin";
import checkIfWhitelist from "../middleware/is-whitelisted";
import Push2TalkController from "../controller/push-to-talk";

const router = express.Router();

router.get("/retrieve", checkIfWhitelist, Push2TalkController.retrieveVoice);
router.get("/report/:chatId", checkIfAdmin, Push2TalkController.generateReport);
