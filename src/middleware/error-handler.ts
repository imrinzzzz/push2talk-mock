import { AppError } from "./error-template";

const logError = (err: any) => {
  console.error(err);
};

const logErrorMiddleware = (err: any, req: any, res: any, next: any) => {
  logError(err);
  next(err);
};

const returnError = (err: any, req: any, res: any, next: any) => {
  res.status(err.statusCode || 500).send(err.message);
};

const isOperationalError = (error: any) => {
  if (error instanceof AppError) {
    return error.isOperational;
  }
  return false;
};

export default {
  logError,
  logErrorMiddleware,
  returnError,
  isOperationalError,
};
