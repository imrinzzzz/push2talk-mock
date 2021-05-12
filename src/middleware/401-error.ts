import { AppError } from "./error-template";
import HttpCode from "../types/http-code";

export class Api401Error extends AppError {
  constructor(
    description: any,
    name: string = "Not authorized to access resource",
    statusCode: HttpCode = HttpCode.UNAUTHORIZED,
    isOperational: boolean = true
  ) {
    super(name, statusCode, description, isOperational);
  }
}
