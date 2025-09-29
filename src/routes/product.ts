import { Response } from "express";
import { RequestBody } from "../types";
import { getDataBase } from "../services/db";

type Payload = {
  id: string;
};

export const getProduct = async (req: RequestBody<Payload>, res: Response) => {
  try {
    const { body } = req;

    const dataBase = await getDataBase();

    const product = dataBase.products.find(({ id }) => id === body.id);

    if (!product) {
      return res.status(404).json({
        error: "Product not found",
      });
    }

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({
      error: "Something went wrong",
    });
  }
};
