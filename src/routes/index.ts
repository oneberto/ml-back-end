import { Router } from "express";
import { getProduct } from "./product";
import { getSeller } from "./seller";
import { getPaymentMethods } from "./payment-method";
import { getPricesByProduct } from "./price";
import { checkCoupon } from "./coupon";

const router = Router();

router.post("/product-details", getProduct);

router.get("/sellers/:id", getSeller);

router.get("/payment-methods", getPaymentMethods);

router.post("/prices-by-product", getPricesByProduct);

router.post("/check-coupon", checkCoupon);

export default router;
