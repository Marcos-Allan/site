import { Typography, Button, IconButton } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { handleCanceled } from '../../redux/messageSlice';
import CloseIcon from '@mui/icons-material/Close';

import { useSpring, animated } from '@react-spring/web'

import { Link } from 'react-router-dom'

function Message() {

    const dispatch = useDispatch()
    const { isDark } = useSelector((state:any) => state.theme as any)

    const [springsClick, apiClick] = useSpring(
        () => ({
            from: { y: 500, opacity: 0, scale: 1 },
            to: { y: 0, opacity: 1, scale: 1 },
            y: 0,
            opacity: 1,
            delay: 8000, 
            config: {
                duration: 800,
                scale: [1, 1, 1],
            }
        })
    )

    function animatedClicked() {
        apiClick.start({
            to: [
                { y: 0, },
                { y: 500, },
            ],
                config: {
                    duration: 600,
                }
        })
    }

    return(
        <animated.div
            style={{
                width: '82%',
                borderRadius: '8px',
                backgroundColor: isDark == false ? '#d9d9d9cb' : '#5c6f73cb',
                minHeight: '80px',
                position: 'fixed',
                bottom: '0%',
                marginBottom: '3%',
                zIndex: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                padding: '18px 8px',
                gap: '14px',
                paddingBottom: '60px',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: isDark == false ? '#00000055' : '#ffffff55',
                overflow: 'hidden',
                ...springsClick
            }}
        >
            <Typography
                variant='subtitle2'
                sx={{
                    width: '90%',
                    fontSize: '20px',
                    fontWeight: 'light',
                    letterSpacing: '1.4px',
                    textAlign: 'center',
                    color: isDark == false ? '#000000' : '#ffffff',
                    lineHeight: '32px',
                    fontFamily: 'Aldrich, sans-serif',
                }}
                >
                Você não está cadastrado, Faça login para salvar seus dados de navegação
            </Typography>
            <IconButton
                onClick={() => {
                    animatedClicked()
                    setTimeout(() => {
                        dispatch(handleCanceled(true))
                    }, 700);
                }}
                sx={{
                    position: 'absolute',
                    right: '3%',
                    top: '3%',
                    zIndex: 30,
                }}
            >
                <CloseIcon
                    sx={{
                        color: isDark == false ? '#000000' : '#ffffff',
                    }}
                    />
                </IconButton>
                <Button
                    variant='contained'
                    sx={{
                        position: 'absolute',
                        left: '0%',
                        bottom: '0%',
                        width: '100%',
                        height: '50px',
                        marginBottom: '0px',
                        padding: '4px 0px',
                        borderRadius: '0%',
                        borderRadiusBottomLeft: '8px',
                        borderRadiusBottomRight: '8px',
                        backgroundColor: isDark == false ? '#ebf0f2cb' : '#2e3c41cb',
                        boxShadow: '0px 0px 0px 0px transparent'
                    }}
                >
                    <Link to={'/login'}>
                        <Typography
                            variant='body2'
                            sx={{
                                fontSize: '20px',
                                letterSpacing: '2px',
                                textTransform: 'capitalize',
                                fontWeight: 'lighter',
                                color: isDark == false ? '#000000' : '#ffffff',
                                fontFamily: 'Aldrich, sans-serif',
                            }}
                            >
                            Fazer Login
                        </Typography>
                    </Link>
                </Button>
        </animated.div>
    )
}
export default Message