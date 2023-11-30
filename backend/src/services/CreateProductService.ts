import prismaClient from '../prisma'

interface CreateProductProps {
    price: string,
    descont: string,
    image: string,
}

class CreateProductService{
    async execute({ price, descont, image }: CreateProductProps) {

        if(!price || !descont || !image){
            throw new Error("Produto sem informações o suficiente")
        }

        const product = await prismaClient.products.create({
            data:{
                price,
                descont,
                image,
            }
        })

        return product
    }
}

export { CreateProductService }