import { Router } from "express";
import productsController from "../controllers/products.controller.js";

const router =  Router();

router.get('/',productsController.getProducts)
router.post('/',productsController.saveProduct);
export default router;