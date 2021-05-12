import { retrieveReport } from "./retrieve-report";

export const generateReport = async (req: any, res: any, _next: any) => {
  try {
    const { chatId } = req.params;
    const reports = await retrieveReport(chatId);
    return res.status(200).json(reports);
  } catch (e) {
    throw e;
  }
};
