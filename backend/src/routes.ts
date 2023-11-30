import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply
} from "fastify";

import { CreateProductcontroller } from './controllers/CreateProductController'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){

    fastify.get('/teste', async (request: FastifyRequest, reply: FastifyReply) => {
        return{ ok: true }  
    })

    fastify.post("/product", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateProductcontroller().handle(request, reply)
    })

}