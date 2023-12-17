import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/userSlice'

import { Box, Menu as MuiMenu, MenuItem, Fade } from '@mui/material'
import MuiButton from '../MuiButton';
import MuiMenuButton from '../MuiMenuButton';

function OptionsButtons() {

    const dispatch = useDispatch()
    const { isLogged, img } = useSelector((state:any) => state.user as any)

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                <>
                    <Box
                        sx={{
                            zIndex: 11,
                            // marginLeft: '50px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignContent: 'flex-end',
                            justifySelf: 'flex-end',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }}
                            id="fade-button"
                            aria-controls={open ? 'fade-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                        <img src={img} style={{ width: '45px', height: '45px', borderRadius: '50%',}} />
                        
                    </Box>

                    <MuiMenu
                        id="fade-menu"
                        MenuListProps={{
                        'aria-labelledby': 'fade-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <MenuItem
                            onClick={() => {
                                handleClose()
                                if(isLogged == true){
                                    window.open('http://localhost:3000/auth/logout',  '_self')
                                    dispatch(logout())
                                }else{
                                    return
                                }
                                //USAR A PÁGINA '/auth/logout' PARA DESTRUIR AS INFORMAÇÕES
                            }}
                        >Logout</MenuItem>
                    </MuiMenu>
                </>
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