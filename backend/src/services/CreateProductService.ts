import prismaClient from '../prisma'

class CreateProductService{
    async execute() {
        console.log("ROTA FOI CHAMADA")

        return { ok:true }
    }
}

export { CreateProductService }