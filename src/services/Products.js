import Product from "../models/Product.js";
import GenericRepository from "./GenericRepository.js";

export default class ProductsRepository extends GenericRepository {
    constructor(dao){
        super(dao,Product.model);
    }
}