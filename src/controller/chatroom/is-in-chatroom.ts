import { InternalServerError } from "./../../middleware/500-error";
export const isInChatroom = async (uid: string, chatroomId: number) => {
  try {
    // using ORM to interact with database
    const user = await orm.chatRoom.find({
      where: {
        OR: [
          {
            id: chatroomId,
            sellerID: uid,
          },
          {
            id: chatroomId,
            buyerID: uid,
          },
        ],
      },
    });
    return true ? user !== null : false;
  } catch (e) {
    throw new InternalServerError(e);
  }
};
