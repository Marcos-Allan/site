import { useState, useEffect, useLayoutEffect } from 'react'
import { api } from '../../services/api'
import  Cookies from 'universal-cookie'

import { useSelector, useDispatch } from 'react-redux'
import { handleCanceled } from '../../redux/messageSlice'

import { Box, Typography } from '@mui/material'

import Menu from '../../components/Menu'
import Categories from '../../components/Categories'
import CardProduct from '../../components/CardProduct'
import Loading from '../../components/Loading'
import MenuLateral from '../../components/MenuLateral'
import Message from '../../components/Message'
import Modal from '../../components/Modal'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'
import { changeUser } from '../../redux/userSlice'


interface ProductsProps {
  price: string,
  image: string,
  descont: string,
  _id: string,
}

interface User {
  isLogged: boolean,
  first_name: string,
  last_name: string,
  img: string,
}

function Home() {
  
  const dispatch = useDispatch()
  const { products } =useSelector((state:any) => state.cart as any)
  const { isOpenModal } = useSelector((state:any) => state.modal as any)
  
  const { 
    isLogged
  } = useSelector((state:any) => state.user as any)

  const { isDark } = useSelector((state:any) => state.theme as any)
  const { isCanceled } = useSelector((state:any) => state.message as any)

  const [produtos, setProdutos] = useState<ProductsProps[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [user, setUser] = useState<User>()

  const cookies = new Cookies()

  useEffect(() => {
    loadProducts()
    setLoading(true)
    const userL = cookies.get('zUser')
    if(userL){
      setUser(userL)
      const userC = {
        isLogged: true,
        first_name: userL.given_name,
        last_name: userL.family_name,
        img: userL.picture
      }
      console.log(user)
        dispatch(changeUser(userC))
        dispatch(handleCanceled(true))
    }
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
        <>
        <Link to={'/cart'}>
            <Box
              sx={{
              width:'38px',
              backgroundColor: isDark == false ? '#d9d9d9' : '#5C6F73',
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
                      color: isDark == false ? '#5C6F73' : '#d9d9d9',
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
                      {products.length}
              </Typography>
            </Box>
          </Link>
          <Categories />
        </>
      )}
      
      {loading == false ? (
        <Loading size={60} />
      ) : (
        <>
          <Typography
            variant='h3'
            sx={{
              textAlign: 'center',
              fontSize: '22px',
              fontWeight: '500',
              letterSpacing: '3px',
              maxWidth: '58vw',
              lineHeight: '28px',
              margin: '20px auto',
              fontFamily: 'Aldrich, sans-serif',
              color: isDark == false ? '#000000' : '#ffffff',
            }}
          >Produtos Cadastrados no Banco de Dados</Typography>

          {produtos.map((produto, num) => (
            <CardProduct
              id={produto._id}
              descont={produto.descont}
              image={produto.image}
              price={produto.price}
              delay={num}
            />
          ))}

        </>
      )}
      
      {isCanceled == false && (
        <Message />
      )}

      {isOpenModal == true && (
          <Modal />
      )}

      <MenuLateral />

    </Box>
  )
}

export default Home
