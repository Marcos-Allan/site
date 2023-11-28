import { useSelector } from 'react-redux'
import Menu from '../../components/Menu'
import { Box } from '@mui/material'
import '../../index.css'

function Home() {
  
  const {name, isLogged} = useSelector((state:any) => state.user as any)

  return (
    <>
    <Menu />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
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
