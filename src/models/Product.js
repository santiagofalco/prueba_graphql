export default class Product {
    static get model(){
        return 'Products';
    }

    static get schema(){
        return {
            name: String,
            description: String,
            thumbnail: String,
        }
    }
}