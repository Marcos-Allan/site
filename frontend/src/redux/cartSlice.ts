import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name:'cart',
    initialState: {
        products: [],
    },
    reducers: {
        addProduct(state:any, payload:any) {
            // VER SE O ITEM JÁ ESTÁ NO CARRINHO
            const productIsAlreadyInCart = state.products.some(
                (product:any) => product.id === payload.payload.id
            )
                // SE SIM ADICIONAR MAIS UMA QUANTIDADE
                if(productIsAlreadyInCart){
                    return {
                        ...state,
                        products: state.products.map((product:any) => 
                            product.id === payload.payload.id
                            ? {...product, quantity: product.quantity + 1}
                            : product
                        )
                    }
                }
                    
                
            // SE NÃO ADICIONA-LO
            return { ...state, products: [...state.products ,{...payload.payload, quantity: 1}] }
        }
    }
})

export const { addProduct } = slice.actions

export const selectCart = (state:any) => state.cart

export default slice.reducer