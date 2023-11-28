import { useDispatch, useSelector } from 'react-redux'
import { changeUser, logout } from './redux/userSlice'
import Menu from './components/Menu'
import './App.css'

function App() {
  
  const {name, isLogged} = useSelector((state:any) => state.user as any)
  const dispatch = useDispatch()

  function handleLogin () {
    if(isLogged == false){
      dispatch(changeUser('Marcos'))
    }else{
      dispatch(logout())
    }
  }

  return (
    <>
    <Menu />
      <div>
        {name ? (
          <p>{name}</p>
        ) : (
          <p>Não há usuario logado</p>
        )}
      </div>

      <div
        onClick={handleLogin}
      >
        {isLogged ? (
          <p>Logout</p>
        ) : (
          <p>Login</p>
        )}
      </div>
    </>
  )
}

export default App
