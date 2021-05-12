import Joi from "joi";

export const isVoiceDataValid = (voiceObj: any) => {
  const schema = Joi.object({
    chatId: Joi.number().required(),
    userId: Joi.string().required(),
    voice: Joi.string().required(),
    length: Joi.number().required(),
  });

  const { error } = schema.validate(voiceObj);

  if (error) return error.details;
  return true;
};
