import { useState, useEffect } from 'react'
import { api } from '../../services/api'

import { useDispatch, useSelector } from 'react-redux'
import { handleMenu } from '../../redux/menuSlice'
import { Box, Typography, Drawer } from '@mui/material'

import Menu from '../../components/Menu'
import Categories from '../../components/Categories'
import CardProduct from '../../components/CardProduct'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface ProductsProps {
  price: string,
  image: string,
  descont: string
}

function Home() {
  
  const { 
    isLogged,
    first_name,
    last_name,
    img
} = useSelector((state:any) => state.user as any)
  
  const { isOpen } = useSelector((state:any) => state.menu as any)
  
  const dispatch = useDispatch()

  const [produtos, setProdutos] = useState<ProductsProps[]>([])

    useEffect(() => {
        loadProducts()
        console.log(isLogged)
        console.log(first_name, img, last_name, isLogged)
    },[])

    async function loadProducts(){
        const response = await api.get('/')
        console.log(response.data)
        setProdutos(response.data)
    }

  return (

    <Box
      sx={{
        position: 'relative',
        width: '100dvw',
        overflow: 'hidden',
        minHeight: '100dvh',
        paddingTop: '164px',
      }}
    >
      <Menu signs={false} />

      {isLogged && (
        <>
          <Box
            sx={{
              position: 'absolute',
              top: '143px',
              zIndex: 11,
              left: '2px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',    
            }}
            >
            <img src={img} style={{ width: '45px', height: '45px', borderRadius: '50%',}} />
          </Box>

          <Box
            sx={{
              width:'38px',
              backgroundColor: '#d9d9d9',
              position: 'fixed',
              top: '140px',
              right: '0%',
              padding: '6px',
              paddingBottom:'10px',
              borderBottomLeftRadius: '30px',
              zIndex: '10',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
            >
            <ShoppingCartIcon
              sx={{
                color: '#5C6F73',
                fontSize: '28px',
              }}
              />
            <Typography
              sx={{
                position: 'absolute',
                top: '0%',
                left: '-24%',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor:'#5C6F73',
                color: '#d9d9d9',
                textAlign:  'center',
                fontSize: '12px',
              }}
              >
              10
            </Typography>
          </Box>
        </>
      )}

      <Categories />

      <CardProduct descont='55' price='60.00' image='img1' />
      <CardProduct descont='10' price='89.90' image='img2' />
      <CardProduct descont='40' price='89.90' image='img3' />
      
      <Typography
      variant='h3'
        sx={{
          textAlign: 'center',
          fontSize: '22px',
          fontWeight: '500',
          letterSpacing: '3px',
          maxWidth: '60vw',
          lineHeight: '28px',
          margin: '20px auto',
          fontFamily: 'Aldrich, sans-serif',
        }}
      >Produtos Cadastrados em um Data Base</Typography>

      {produtos.map((produto) => (
                <CardProduct
                    descont={produto.descont}
                    image={produto.image}
                    price={produto.price}
                />
            ))}

      <Drawer
          anchor='left'
          open={isOpen}
          onClose={() => dispatch(handleMenu(false))}
      >
        <Box
          p={2}
          width='250px'
          textAlign='center'
          role='presentation'
        >
          <Typography
            variant='h6'
            component='div'
          >
            TechStore Menu
          </Typography>
        </Box>
      </Drawer>

    </Box>
  )
}

export default Home
