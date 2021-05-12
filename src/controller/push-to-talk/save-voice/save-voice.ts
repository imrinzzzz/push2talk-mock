import { saveVoiceToDb } from "./save-voice-to-db";
import { AppError } from "../../../middleware/error-template";
import HttpCode from "../../../types/http-code";
import VoiceValidator from "./../../../validations/push-to-talk";

export const saveVoice = async (req: any, res: any, _next: any) => {
  try {
    const validated = VoiceValidator.isVoiceDataValid(req.body);
    if (typeof validated === "object") {
      throw new AppError(
        "Wrong input",
        HttpCode.UNPROCESSABLE_ENTITY,
        "Wrong information was input (wrong type)",
        true
      );
    }
    await saveVoiceToDb(req.body);
    return res.status(200).json({
      message: "successfully create voice chat",
    });
  } catch (e) {
    throw e;
  }
};
