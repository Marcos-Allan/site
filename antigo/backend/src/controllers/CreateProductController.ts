import { FastifyRequest, FastifyReply } from 'fastify'

import { CreateProductService } from '../services/CreateProductService'

class CreateProductController{
    async handle(request:FastifyRequest, reply:FastifyReply){
        const { price, descont, image} = request.body as { price: string, descont: string, image: string }

        console.log( price )
        console.log( descont )
        console.log( image )

        const productService = new CreateProductService()

        const product = await productService.execute({ price, descont, image })

        reply.send(product)
    }
}

export { CreateProductController }