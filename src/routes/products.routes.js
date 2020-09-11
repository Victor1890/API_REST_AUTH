import { Router } from "express";
const router = Router();

import * as productsCtrls from "../controllers/products.controller";

router.post("/", productsCtrls.createProducts);
router.get("/", productsCtrls.getProducts);
router.get("/:id", productsCtrls.getProductById);
router.put("/:id", productsCtrls.updateProductById);
router.delete("/:id", productsCtrls.deleteProductById);

export default router;
