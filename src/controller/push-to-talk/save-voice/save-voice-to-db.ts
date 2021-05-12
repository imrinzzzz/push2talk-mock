import { InternalServerError } from "./../../../middleware/500-error";
export const saveVoiceToDb = async (voiceInfo: JSON) => {
  try {
    // using ORM to interact with database
    const voice = orm.voiceChat.create({
      ...voiceInfo,
    });
    if (voice === null)
      throw new InternalServerError(
        "There was a problem creating data in database.."
      );
  } catch (e) {
    throw e;
  }
};
