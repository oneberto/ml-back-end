import { Response } from "express";
import { RequestBody } from "../types";
import { getDataBase } from "../services/db";

type Payload = {
  code: string;
};

export const checkCoupon = async (req: RequestBody<Payload>, res: Response) => {
  try {
    const { body } = req;

    const dataBase = await getDataBase();

    const coupon = dataBase.coupons.find(
      ({ code }) => code === body.code.toUpperCase()
    );

    if (!coupon) {
      return res.status(404).json({
        error: "Coupon not found",
      });
    }

    return res.status(200).json(coupon);
  } catch (error) {
    return res.status(500).json({
      error: "Something went wrong",
    });
  }
};
