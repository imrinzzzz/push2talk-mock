import { InternalServerError } from "./500-error";
import UserValidations from "../controller/user";

const checkIfAdmin = (req: any, res: any, next: any) => {
  try {
    const { uid } = req.body;
    return UserValidations.isAdmin(uid);
  } catch (e) {
    throw new InternalServerError(e);
  }
};
