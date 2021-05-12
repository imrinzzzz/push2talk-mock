import { InternalServerError } from "./../../../middleware/500-error";

export const isAdmin = async (uid: string) => {
  try {
    // using ORM to interact with database
    const getAdmin = await orm.admin.find({
      where: {
        id: uid,
      },
    });
    return true ? getAdmin !== null : false;
  } catch (e) {
    throw new InternalServerError(e);
  }
};
