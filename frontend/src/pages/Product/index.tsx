import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CardProduct from '../../components/CardProduct'

interface Product {
    descont: string,
    id: string,
    img: string,
    price: string,
}

function Product(){
    const { id } = useParams()
    const { isDark } = useSelector((state:any) => state.theme as any)

    const [product, setProduct] = useState<Product>()

    useEffect(() => {
        api.get(`/product/${id}`)
        .then((response) => {
            setProduct(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    return (
        <Box
            sx={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundColor: isDark == false ? '#ebf0f2' : '#2e3c41',
            }}
        >
            {/* <Typography
                sx={{
                    color: isDark == false ? '#000000' : '#ffffff',
                    fontSize: '26px',
                    fontFamily: 'Aldrich, sans-serif',
                }}
            >
                Product {id}
            </Typography> */}
            {product && (
                <CardProduct
                    descont={product.descont}
                    id={product.id}
                    image={product.image}
                    price={product.price}
                    key={product.id}
                />
            )}
        </Box>
    )
}

export default Product