import { AppError } from "./error-template";
import UserValidations from "../controller/user";
import HttpCode from "../types/http-code";

const checkIfWhitelist = async (req: any, res: any, next: any) => {
  try {
    const { uid } = req.headers.authorization.split(" ")[1];;
    const isWhitelist = await UserValidations.isWhitelist(uid);
    if (isWhitelist) return next();
    throw new AppError(
      "Not whitelisted",
      HttpCode.FORBIDDEN,
      "This user is not whitelisted.",
      true
    );
  } catch (e) {
    throw e;
  }
};

export default checkIfWhitelist;
