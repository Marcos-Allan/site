import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Menu from '../../components/Menu'
import MenuLateral from '../../components/MenuLateral'

interface Product {
    descont: string,
    id: string,
    image: string,
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
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundColor: isDark == false ? '#ebf0f2' : '#2e3c41',
            }}
        >
            <Menu signs={true} />
            {product && (
                <img src={product.image} style={{ width: '100%', marginTop: '75px' }} />
            )}

            <MenuLateral />

        </Box>
    )
}

export default Product