import { Router } from "express";
const router = Router();

import * as productsCtrls from "../controllers/products.controller";
import { authJwt } from "../middlewares";

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isMoredator],
  productsCtrls.createProducts
);
router.get("/", productsCtrls.getProducts);
router.get("/:id", productsCtrls.getProductById);
router.put(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  productsCtrls.updateProductById
);
router.delete(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  productsCtrls.deleteProductById
);

export default router;
