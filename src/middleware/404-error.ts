import { AppError } from "./error-template";
import HttpCode from "../types/http-code";

export class Api404Error extends AppError {
  constructor(
    description: any,
    name: string = "Resource Not Found",
    statusCode: HttpCode = HttpCode.NOT_FOUND,
    isOperational: boolean = true
  ) {
    super(name, statusCode, description, isOperational);
  }
}
