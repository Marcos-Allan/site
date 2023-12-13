import { useState, useEffect, useLayoutEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { handleCanceled } from '../../redux/messageSlice'

import { Box, Typography } from '@mui/material'

import Menu from '../../components/Menu'
import Loading from '../../components/Loading'
import MenuLateral from '../../components/MenuLateral'
import Message from '../../components/Message'

function Cart() {
  
  const dispatch = useDispatch()

  const { 
    isLogged,
    first_name,
    last_name,
    img
  } = useSelector((state:any) => state.user as any)

  const { isDark } = useSelector((state:any) => state.theme as any)
  const { isCanceled } = useSelector((state:any) => state.message as any)
  const { products } =useSelector((state:any) => state.cart as any)

  const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
      console.log(isLogged, first_name, img, last_name, isLogged)
      setLoading(true)
      console.log('canceled: '+isCanceled)
    },[])
    
    useLayoutEffect(() => {
      if(isLogged == true){
        dispatch(handleCanceled(true))
      }
      console.log(products)
    },[])

  return (

    <Box
      sx={{
        position: 'relative',
        width: '100dvw',
        overflow: 'hidden',
        maxHeight: '100dvh',
        overflowY: 'scroll',
        paddingTop: '164px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: isDark == false ? '#ebf0f2' : '#2e3c41',  
      }}
    >
      <Menu signs={false} />
      
      {loading == false ? (
        <Loading />
      ) : (
      <>
            <Typography
                sx={{
                    color: isDark == false ? '#000000' : '#ffffff'
                }}
                >
                Asincrôno
            </Typography>
            {products.map((product:any) => (
                <>
                    <img
                        src={product.image}
                        style={{
                            width: '300px',
                            height: '180px',
                            borderRadius: '10px',
                        }}
                    />
                    <p>{product.price}</p>
                    <p>{product.descont}</p>
                    <p>{product.quantity}</p>
                </>
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

export default Cart
