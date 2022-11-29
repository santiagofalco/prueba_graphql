import mongoose from 'mongoose';
import Product from './Product.js';
import User from './User.js';


export default class Dao {
        constructor(){
            this.connection = mongoose.connect('mongodb+srv://santiagofalco:123asd@clustercursocoder.guulqh2.mongodb.net/atlasdb?retryWrites=true&w=majority')
            const userSchema = mongoose.Schema(User.schema);
            const productSchema = mongoose.Schema(Product.schema)
            this.models = {
                [User.model] : mongoose.model(User.model,userSchema),
                [Product.model]: mongoose.model(Product.model, productSchema)
            }
        }

        getAll = (params, entity) =>{
            if(!this.models[entity]) throw new Error('Model is not defined in dao')
            return this.models[entity].find(params).lean();
        }
        getBy = (params,entity) => {
            if(!this.models[entity]) throw new Error('Model is not defined in dao')
            return this.models[entity].findOne(params).lean();
        }
        save = (document,entity) =>{
            if(!this.models[entity]) throw new Error('Model is not defined in dao')
            return this.models[entity].create(document);
        }
        
}