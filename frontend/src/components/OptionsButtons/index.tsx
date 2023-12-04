import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/userSlice' 

import { Box } from '@mui/material'
import MuiButton from '../MuiButton';
import MuiIconButton from '../MuiIconButton';

function OptionsButtons() {

    const dispatch = useDispatch()
    const { first_name, last_name, isLogged, img } = useSelector((state:any) => state.user as any)

    function handleLogin(){

        console.log(first_name, last_name, isLogged, img)

        if(first_name){
            dispatch(logout())
        }else{
            return
        }
    }
    

    return(
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: {
                    xs: 'space-between',
                    sm: 'space-around',
                    md: 'space-around',
                    lg: 'space-around',
                    xg: 'space-around',
                },
                flex: {
                    xs: 3,
                    sm: 2,
                    md: 1,
                    lg: 1,
                    xg: 1,
                }
            }}
        >
            {!first_name && first_name === '' && (
                <MuiButton
                    text='criar conta'
                    link='/login'
                    clicked={() => console.log('clicado')}
                />
            )}
            {first_name !== '' ? (
                <MuiButton
                    text={'Logout'}
                    link='/'
                    clicked={handleLogin}
                />
            ):(
                <MuiButton
                    text={'Login'}
                    link='/login'
                    clicked={() => console.log('oi')}
                />
            )}

            <MuiIconButton />

        </Box>
    )
}

export default OptionsButtons