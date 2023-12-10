import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/userSlice'

import { Box, Typography, Menu as MuiMenu, MenuItem, Fade } from '@mui/material'
import MuiButton from '../MuiButton';
import MuiMenuButton from '../MuiMenuButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function OptionsButtons() {

    const dispatch = useDispatch()
    const { first_name, isLogged, img } = useSelector((state:any) => state.user as any)
    const { isDark } = useSelector((state:any) => state.theme as any)

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
                    xs: 'space-between',
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
            {!first_name && first_name === '' && (
                <MuiButton
                    text='criar conta'
                    link='/login'
                    clicked={() => console.log('clicado')}
                />
            )}
            {isLogged == true ? (
                        <>
                            <Box
                                sx={{
                                    zIndex: 11,
                                    display: 'flex',
                                    justifyContent: 'center',
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
                                            dispatch(logout())
                                        }else{
                                            return
                                        }
                                    }}
                                >Logout</MenuItem>
                            </MuiMenu>

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
                                    10
                                </Typography>
                            </Box>
                </>
            ):(
                <MuiButton
                    text={'Login'}
                    link='/login'
                    clicked={() => console.log('oi')}
                />
            )}

            <MuiMenuButton />

        </Box>
    )
}

export default OptionsButtons