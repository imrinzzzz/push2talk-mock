import { isAdmin } from "./../../user/validations/is-admin";
import { isInChatroom } from "./../../chatroom/is-in-chatroom";
import { retrieveVoiceFromDb } from "./retrieve-voice-from-db";
import { Api401Error } from "../../../middleware/401-error";

export const retrieveVoice = async (req: any, res: any, _next: any) => {
  try {
    const { chatId, uid, voiceId } = req.query;
    
    if (isInChatroom(uid, chatId) || isAdmin(uid)) {
      const voiceChat = await retrieveVoiceFromDb(voiceId);
      return voiceChat;
    } else {
      throw new Api401Error(
        "This user is not authorized to access this voice chat."
      );
    }
  } catch (e) {
    throw e;
  }
};
