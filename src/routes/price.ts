import { Response } from "express";
import { RequestBody } from "../types";
import { getDataBase } from "../services/db";

type Payload = {
  productId: string;
};

export const getPricesByProduct = async (
  req: RequestBody<Payload>,
  res: Response
) => {
  try {
    const { body } = req;

    const dataBase = await getDataBase();

    const prices = dataBase.prices.filter(
      ({ productId }) => productId === body.productId
    );

    if (!prices) {
      throw new Error();
    }

    return res.status(200).json({ prices });
  } catch (error) {
    return res.status(500).json({
      error: "Something went wrong",
    });
  }
};
