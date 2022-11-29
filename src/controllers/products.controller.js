import { productService } from "../services/services.js";

const getProducts = async(req,res)=> {
    const products = await productService.get();
    res.send({products})
}

const saveProduct = async(req,res)=>{
    const product = req.body;
    let result = await productService.save(product);
    res.send({result})
}

export default {
    getProducts,
    saveProduct
}