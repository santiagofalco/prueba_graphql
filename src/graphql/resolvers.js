import { productService, usersService } from "../services/services.js"

const resolvers = {
    Query: {
        hello: () => 'Hola mundo',
        getAllUsers: async () => {
            let users = await usersService.get()
            return users
        },
        getAllProducts: async () => {
            let products = await productService.get()
            return products

        }
    }
}

export default resolvers