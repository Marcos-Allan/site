import { useState, useEffect, useLayoutEffect } from 'react'
import { api } from '../../services/api'

import { useSelector, useDispatch } from 'react-redux'
import { handleCanceled } from '../../redux/messageSlice'

import { Box, Typography } from '@mui/material'

import Menu from '../../components/Menu'
import Categories from '../../components/Categories'
import CardProduct from '../../components/CardProduct'
import Loading from '../../components/Loading'
import MenuLateral from '../../components/MenuLateral'
import Message from '../../components/Message'

interface ProductsProps {
  price: string,
  image: string,
  descont: string,
  _id: string,
}

function Home() {
  
  const dispatch = useDispatch()

  const { 
    isLogged,
    first_name,
    last_name,
    img
  } = useSelector((state:any) => state.user as any)

  const { isDark } = useSelector((state:any) => state.theme as any)
  const { isCanceled } = useSelector((state:any) => state.message as any)

  const [produtos, setProdutos] = useState<ProductsProps[]>([])
  const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
      loadProducts()
      console.log(isLogged)
      console.log(first_name, img, last_name, isLogged)
      setLoading(true)
      console.log('canceled '+isCanceled)
    },[])
    
    useLayoutEffect(() => {
      if(isLogged == true){
        dispatch(handleCanceled(true))
      }
    },[])

    async function loadProducts(){
        const response = await api.get('/')
        setProdutos(response.data)
        console.log(response.data)
    }

  return (

    <Box
      sx={{
        position: 'relative',
        width: '100dvw',
        overflow: 'hidden',
        minHeight: '100dvh',
        paddingTop: '164px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: isDark == false ? '#ebf0f2' : '#2e3c41',  
      }}
    >
      <Menu signs={false} />

      {loading == true && (
        <Categories />
      )}
      
      {loading == false ? (
        <Loading />
      ) : (
        <>
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
              color: isDark == false ? '#000000' : '#ffffff',
            }}
          >Produtos Cadastrados em um Data Base</Typography>

          {produtos.map((produto) => (
            <CardProduct
              id={produto._id}
              descont={produto.descont}
              image={produto.image}
              price={produto.price}
            />
          ))}

        </>
      )}
      
      {isCanceled == false && (
        <Message />
      )}
      <MenuLateral />

    </Box>
  )
}

export default Home
