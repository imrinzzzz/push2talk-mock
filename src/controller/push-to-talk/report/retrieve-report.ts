import { Api404Error } from './../../../middleware/404-error';
export const retrieveReport = async (chatId: number) => {
  try {
    // using ORM to interact with database
    /**
     * the function below returns "userId", "recording length",
     * and "chatroom name" from VoiceChat table
     * for more information please see https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#include
     */
    const voiceChatReports = await orm.voiceChat.findMany({
      where: {
        id: chatId,
      },
      include: {
        userId: true,
        length: true,
        ChatRoom: {
          where: {
            id: chatId,
          },
          include: {
            name: true,
          },
        },
      },
    });

    if (voiceChatReports !== null) return voiceChatReports
    throw new Api404Error("Voice Chat information from given chatId not found..")
  } catch (e) {
    throw e;
  }
};
