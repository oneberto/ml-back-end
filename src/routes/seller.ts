import { Response, Request } from "express";
import { getDataBase } from "../services/db";

type Params = {
  id: string;
};

export const getSeller = async (req: Request<Params>, res: Response) => {
  try {
    const { params } = req;

    const dataBase = await getDataBase();

    const seller = dataBase.sellers.find(({ id }) => id === params.id);

    if (!seller) {
      return res.status(404).json({
        error: "Seller not found",
      });
    }

    return res.status(200).json(seller);
  } catch (error) {
    return res.status(500).json({
      error: "Something went wrong",
    });
  }
};
