export const selectProductsCount = (rootReducer:any) => {
    return rootReducer.cartReducer.product.reduce(
        (acc:any, curr:any) => acc + curr.quantity,
        0
    )
}