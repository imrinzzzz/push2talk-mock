import { AppError } from "./error-template";
import HttpCode from "../types/http-code";

export class InternalServerError extends AppError {
  constructor(
    description: any,
    name: string = "Internal Server Error",
    statusCode: HttpCode = HttpCode.INTERNAL_SERVER_ERROR,
    isOperational: boolean = true
  ) {
    super(name, statusCode, description, isOperational);
  }
}
