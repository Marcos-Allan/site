import { useState, useEffect, useLayoutEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { handleCanceled } from '../../redux/messageSlice'
import { removeProduct, decreaseProduct, increaseProduct } from '../../redux/cartSlice'
import { handleModal } from '../../redux/modalSlice'

import { Box, Typography, IconButton } from '@mui/material'

import Menu from '../../components/Menu'
import Loading from '../../components/Loading'
import MenuLateral from '../../components/MenuLateral'
import Message from '../../components/Message'
import Modal from '../../components/Modal'

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'
import { handleText } from '../../redux/textMessageSlice'

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
  const { isOpenModal } = useSelector((state:any) => state.modal as any)

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
        // position: 'relative',
        // width: '100dvw',
        // minHeight: '100%',
        // paddingTop: '164px',
        // display: 'flex',
        // justifyContent: 'flex-start',
        // alignItems: 'center',
        // overflowY: 'scroll',
        // flexDirection: 'column',
        // backgroundColor: isDark == false ? '#ebf0f2' : '#2e3c41',  
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100dvw',
        height: 'calc(100dvh - 164px)',
        backgroundColor: isDark == false ? '#ebf0f2' : '#313E40',
        paddingTop: '164px',
        overflowY: 'scroll',
      }}
    >
      <Menu signs={false} />
      
      {loading == false ? (
        <Loading />
      ) : (
        <>
            <Typography
                sx={{
                    color: isDark == false ? '#000000' : '#ffffff',
                    fontFamily: 'Aldrich, sans-serif',
                    margin: '20px 0px',
                    fontSize: '30px',
                }}
              >
                  Produtos do Cart
            </Typography>
            {products.length > 0 ? products.map((product:any) => (
                <Box
                  sx={{
                    width: '100%',
                    borderBottomWidth: '1px',
                    borderBottomStyle: 'solid',
                    borderBottomColor: isDark == false ? '#5C6F73' : '#ebf0f2',
                    borderTopWidth: '1px',
                    borderTopStyle: 'solid',
                    borderTopColor: isDark == false ? '#5C6F73' : '#ebf0f2',
                    margin: '3px 0px',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                  }}
                >
                  <Box
                    sx={{
                      flexGrow: 1,
                      maxWidth: '220px',
                      position: 'relative',
                      padding: '2px 0px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.image}
                        style={{
                          width: '100%',
                          borderBottomRightRadius: '10px',
                          borderTopRightRadius: '10px',
                        }}
                      />
                      </Link>
                      <Box
                          sx={{
                            flexGrow: 2,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '44px',
                            height: '44px',
                            borderRadius: '50%',
                            position: 'absolute',
                            top: '-5%',
                            right: '-5%',
                            backgroundColor: Number(product.descont) < 35 ? '#fd7c7c' : '#a9fd7c',
                          }}
                        >
                          <Typography
                            sx={{
                              textAlign: 'center',
                              flexGrow: 1,
                              fontFamily: 'Aldrich, sans-serif',
                              color: '#000000',
                            }}
                          >
                            {product.descont}%
                          </Typography>
                        </Box>
                    </Box>
                    <Box
                      sx={{
                        flexGrow: 3,
                        gap: '20px',
                      }}
                    >
                      <IconButton
                        sx={{
                          position: 'absolute',
                          right: '0%',
                          top: '0%'
                        }}
                        onClick={() => {
                          dispatch(handleText('Produto removido do Carrinho'))
                          dispatch(handleModal(true))
                          dispatch(removeProduct(product))
                        }}
                      >
                        <CloseIcon
                          sx={{
                            color: isDark == false ? '#5C6F73' : '#d9d9d9',
                          }}
                        />
                      </IconButton>
                      <Box
                        sx={{
                          flexGrow: 1,
                          padding: '0px 10%',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <IconButton
                          onClick={() => {
                            dispatch(handleModal(true))
                            dispatch(decreaseProduct(product))
                            dispatch(handleText(`Retirou ${(product.quantity + 1) - product.quantity} unidade do produto`))
                          }}
                        >
                            <RemoveIcon
                              sx={{
                                color: isDark == false ? '#5C6F73' : '#d9d9d9',
                              }}
                            />
                          </IconButton>
                        <Typography
                          sx={{
                            textAlign: 'center',
                            fontFamily: 'Aldrich, sans-serif',
                          color: isDark == false ? '#000000' : '#ffffff',
                          }}
                          >
                          {product.quantity}
                        </Typography>
                        <IconButton
                          onClick={() => {
                            dispatch(handleModal(true))
                            dispatch(increaseProduct(product))
                            dispatch(handleText(`Adicionou 1 unidade do produto`))
                          }}
                        >
                            <AddIcon
                              sx={{
                                color: isDark == false ? '#5C6F73' : '#d9d9d9',
                              }}
                            />
                          </IconButton>
                      </Box>

                      <Typography
                        sx={{
                          flexGrow: 1,
                          textAlign: 'center',
                          textDecoration: 'line-through',
                          fontFamily: 'Aldrich, sans-serif',
                          color: isDark == false ? '#000000' : '#ffffff',
                        }}
                      >
                        R$ {product.price}
                      </Typography>

                      <Typography
                        sx={{
                          flexGrow: 1,
                          textAlign: 'center',
                          fontFamily: 'Aldrich, sans-serif',
                          color: isDark == false ? '#000000' : '#ffffff',
                        }}
                      >
                        R$ {((Number(product.price) - (Number(product.price) / 100) * Number(product.descont))).toFixed(2)}
                      </Typography>
                    </Box>
                </Box>
            )) : (
              <Typography
                sx={{
                  color: isDark == false ? '#000000' : '#ffffff',
                  fontFamily: 'Aldrich, sans-serif',
                  fontSize: '17px',
                }}
              >
                Sem itens no Carrinho
              </Typography>
            )}
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

export default Cart
