import { useSelector } from 'react-redux'
import { Box, Typography } from '@mui/material'

import Menu from '../../components/Menu'
import Categories from '../../components/Categories'
import CardProduct from '../../components/CardProduct'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import '../../index.css'

function Home() {
  
  const {name, isLogged} = useSelector((state:any) => state.user as any)

  return (
    <>
    <Menu />
    <Categories />
    <CardProduct descont={55} price='60.00' image='img1' />
    <CardProduct descont={10} price='89.90' image='img2' />
    <CardProduct descont={40} price='89.90' image='img3' />
    {isLogged && (
      <Box
        sx={{
          width:'36px',
          backgroundColor: '#d9d9d9',
          position: 'absolute',
          top: '12.1%',
          right: '-3.5%',
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
    )}

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: '#EBF0F2',
        }}
      >
        {name ? (
          <p>{name}</p>
        ) : (
          <p>Não há usuario logado</p>
        )}
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {isLogged ? (
          <p>Logout</p>
        ) : (
          <p>Login</p>
        )}
      </Box>
    </>
  )
}

export default Home
