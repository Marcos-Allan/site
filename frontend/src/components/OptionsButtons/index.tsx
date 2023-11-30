import { useDispatch, useSelector } from 'react-redux';
import { changeUser, logout } from '../../redux/userSlice' 

import { Box } from '@mui/material'
import MuiButton from '../MuiButton';
import MuiIconButton from '../MuiIconButton';

function OptionsButtons() {
    
    const dispatch = useDispatch()
    const { name } = useSelector((state:any) => state.user as any)

    function handleLogin(){
        if(!name){
            dispatch(changeUser('Allan'))
        }else{
            dispatch(logout())
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
            {!name && (
                <MuiButton
                    text='criar conta'
                    link='/login'
                    clicked={() => console.log('clicado')}
                />
            )}
            <MuiButton
                text={name ? 'Logout' : 'Login'}
                link='/'
                clicked={handleLogin}
            />

            <MuiIconButton />

        </Box>
    )
}

export default OptionsButtons