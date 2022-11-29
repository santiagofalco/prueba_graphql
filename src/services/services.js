import Dao from '../models/dao.js';
import UserRepository from './Users.js';
import ProductRepository from './Products.js'


const dao = new Dao();

export const usersService =  new UserRepository(dao);
export const productService = new ProductRepository(dao)
