import express from "express";

import Push2TalkRouter from "./push-to-talk";

const router = express.Router();

router.use("/push2talk", Push2TalkRouter);

export const Router = router;
