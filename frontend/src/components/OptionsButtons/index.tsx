import { useSelector } from 'react-redux';

import { Box } from '@mui/material'
import MuiButton from '../MuiButton';
import MuiMenuButton from '../MuiMenuButton';
import User from '../User';

function OptionsButtons() {

    const { isLogged } = useSelector((state:any) => state.user as any)

    return(
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: {
                    xs: 'flex-end',
                    sm: 'space-around',
                    md: 'space-around',
                    lg: 'space-around',
                    xg: 'space-around',
                },
                gap: '20px',
                flex: {
                    xs: 3,
                    sm: 2,
                    md: 1,
                    lg: 1,
                    xg: 1,
                }
            }}
        >
            {isLogged == true ? (
                <User />
            ):(
                <>
                    <MuiButton
                        text='criar conta'
                        link='/login'
                        clicked={() => console.log('clicado')}
                    />
                    <MuiButton
                        text={'Login'}
                        link='/login'
                        clicked={() => console.log('oi')}
                    />
                </>
            )}

            <MuiMenuButton />

        </Box>
    )
}

export default OptionsButtons