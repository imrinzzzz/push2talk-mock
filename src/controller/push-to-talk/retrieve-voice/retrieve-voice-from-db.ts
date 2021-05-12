import { Api404Error } from "./../../../middleware/404-error";
export const retrieveVoiceFromDb = async (voiceId: number) => {
  try {
    // using ORM to interact with database
    const voice = await orm.voiceChat.find({
      where: {
        id: voiceId,
      },
    });

    if (voice !== null) return voice;
    throw new Api404Error(
      "Voice Chat from the given voice chat id not found.."
    );
  } catch (e) {
    throw e;
  }
};
