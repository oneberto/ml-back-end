import { Response } from "express";
import { RequestBody } from "../types";
import { getDataBase } from "../services/db";

type Payload = {
  productId: string;
  couponCode?: string;
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

    if (!prices?.length) {
      return res.status(404).json({
        error: "Prices not found for this product",
      });
    }

    const { couponCode } = body;

    if (!couponCode) {
      return res.status(200).json({ prices });
    }

    const coupon = dataBase.coupons.find(
      ({ code }) => code === couponCode.toUpperCase()
    );

    if (!coupon) {
      return res.status(404).json({
        error: "Coupon not found",
      });
    }

    const updatePricesByCoupon = prices.map((item) => {
      const oldValue = item.amount;
      const amount =
        coupon.type === "percentage"
          ? item.amount * ((100 - coupon.value / 100) / 100)
          : item.amount - coupon.value;

      const installmentAmount = amount / item.installments;

      return {
        ...item,
        oldValue,
        amount,
        ...(item.installments > 1 && {
          installmentAmount,
        }),
      };
    });

    return res.status(200).json({ prices: updatePricesByCoupon, coupon });
  } catch (error) {
    return res.status(500).json({
      error: "Something went wrong",
    });
  }
};
