import { Box, Typography, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { changeUser, logout } from '../../redux/userSlice' 
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'

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
                    <Link to='/login'>
                    <Button
                        sx={{
                            backgroundColor: '#5C6F73',
                            padding: '4px 10px',
                            borderRadius: '10px',
                            flexGrow: 1,
                            minWidth: '90px',
                            margin: '0px 5px',
                            '&:hover':{
                                backgroundColor: '#5C6F73',
                            }
                        }}
                        >
                        <Typography
                            sx={{
                                color: '#ffffff',
                                fontFamily: 'Aldrich, sans-serif',
                                fontSize: '12px',
                                textAlign: 'center',
                                textTransform: 'capitalize',
                            }}
                            >
                            Criar Conta
                        </Typography>
                    </Button>
                </Link>
            )}
            <Button
                sx={{
                    backgroundColor: '#5C6F73',
                    padding: '4px 10px',
                    borderRadius: '10px',
                    flexGrow: 1,
                    maxWidth: '60px',
                    margin: '0px 5px',
                    '&:hover':{
                        backgroundColor: '#5C6F73',

                    }
                }}
                onClick={handleLogin}
                >
                <Typography
                    sx={{
                        color: '#ffffff',
                        fontFamily: 'Aldrich, sans-serif',
                        fontSize: '12px',
                        textAlign: 'center',
                        textTransform: 'capitalize',
                    }}
                    >
                    {name ? 'Logout' : 'Login'}
                </Typography>
            </Button>
            <MenuIcon 
                sx={{
                    maxWidth: '60px',
                    paddingRight: '10px',
                    flexGrow: 1,
                }}
            />
        </Box>
    )
}

export default OptionsButtons