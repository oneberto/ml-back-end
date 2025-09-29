import { Response, Request } from "express";
import { getDataBase } from "../services/db";

type Params = {
  id: string;
};

export const getPaymentMethods = async (
  req: Request<Params>,
  res: Response
) => {
  try {
    const dataBase = await getDataBase();

    const { paymentMethods } = dataBase;

    if (!paymentMethods) {
      throw new Error();
    }

    return res.status(200).json(paymentMethods);
  } catch (error) {
    return res.status(500).json({
      error: "Something went wrong",
    });
  }
};
