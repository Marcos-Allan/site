import { FastifyRequest, FastifyReply } from 'fastify'

// import { CreateProductService } from '../services/CreateProductService'

import { CreateProductService } from '../services/CreateProductService'

class CreateProductcontroller{
    async handle(request:FastifyRequest, reply:FastifyReply){
        
        const productService = new CreateProductService()

        const product = await productService.execute()

        reply.send(product)
    }
}

export { CreateProductcontroller }