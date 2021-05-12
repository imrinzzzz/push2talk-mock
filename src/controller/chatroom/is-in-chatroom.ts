import { InternalServerError } from './../../middleware/500-error';
export const isInChatroom = async (uid: string) => {
  try {
    // using ORM to interact with database
    const user = await orm.chatRoom.find({
      where: {
        id: uid,
      },
    });
    return true ? user !== null : false;
  } catch (e) {
    throw new InternalServerError(e);
  }
};
