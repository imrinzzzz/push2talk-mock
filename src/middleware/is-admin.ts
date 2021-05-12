import { AppError } from "./error-template";
import UserValidations from "../controller/user";
import HttpCode from "../types/http-code";

const checkIfAdmin = async (req: any, res: any, next: any) => {
  try {
    const { uid } = req.headers.authorization.split(" ")[1];
    const isAdmin = await UserValidations.isAdmin(uid);
    if (isAdmin) return next();
    throw new AppError(
      "Not an admin",
      HttpCode.FORBIDDEN,
      "This user is not an admin.",
      true
    );
  } catch (e) {
    throw e;
  }
};

export default checkIfAdmin;
