import { Router } from "express";
import { getProduct } from "./product";
import { getSeller } from "./seller";
import { getPaymentMethods } from "./payment-method";
import { getPricesByProduct } from "./price";
import { checkCoupon } from "./coupon";

const router = Router();

/**
 * @swagger
 * /api/product-details:
 *  post:
 *   description: Obter os detalhes de um produto pelo id
 */
router.post("/product-details", getProduct);

/**
 * @swagger
 * /api/sellers:
 *  get:
 *   description: Obter os detalhes de um vendedor pelo id
 */
router.get("/sellers/:id", getSeller);

/**
 * @swagger
 * /api/payment-methods:
 *  get:
 *   description: Obtem os meios de pagamento
 */
router.get("/payment-methods", getPaymentMethods);

/**
 * @swagger
 * /api/prices-by-product:
 *  post:
 *   description: Obtem os preços do produto baseado na forma de pagamento
 */
router.post("/prices-by-product", getPricesByProduct);

/**
 * @swagger
 * /api/check-coupon:
 *  post:
 *   description: Verifica se um cupom é válido
 */
router.post("/check-coupon", checkCoupon);

export default router;
