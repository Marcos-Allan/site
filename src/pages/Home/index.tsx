import { useDispatch, useSelector } from 'react-redux'
import { handleMenu } from '../../redux/menuSlice'
import { Box, Typography, Drawer } from '@mui/material'

import Menu from '../../components/Menu'
import Categories from '../../components/Categories'
import CardProduct from '../../components/CardProduct'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Home() {
  
  const { isLogged } = useSelector((state:any) => state.user as any)
  
  const { isOpen } = useSelector((state:any) => state.menu as any)
  
  const dispatch = useDispatch()

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
      <Menu />

      {isLogged && (
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
      )}

      <Categories />

      <CardProduct descont={55} price='60.00' image='img1' />
      <CardProduct descont={10} price='89.90' image='img2' />
      <CardProduct descont={40} price='89.90' image='img3' />

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
