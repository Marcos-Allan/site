import { useEffect } from 'react'
import { Typography, Box, IconButton } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { handleModal } from '../../redux/modalSlice'
import { useSpring, animated } from '@react-spring/web'

import CloseIcon from '@mui/icons-material/Close'

function Modal(){

    const dispatch = useDispatch()
    const { isDark } = useSelector((state:any) => state.theme as any)

    const [ springs, apiClick ] = useSpring(
        () => ({
            from: { y: -400, opacity: 1, scale: 1 },
            to: { y: 0, opacity: 1, scale: 1 },
            x: 0,
            opacity: 1,
            config: {
                duration: 350,
                scale: [1, 1, 1],
            }
        })
    )
    
    const [ springsBar ] = useSpring(
        () => ({
            from: { x: 0, },
            to: { x: -330, },
            x: 0,
            delay: 800,
            config: {
                duration: 3200,
                scale: [1, 1, 1],
            }
        })
    )

    function animatedClicked() {
        apiClick.start({
            to: [
                { y: -400, opacity: 1, scale: 1 },
            ],
                config: {
                    duration: 350,
                }
        })
    }

    useEffect(() => {
        setTimeout(() => {
            animatedClicked()
            setTimeout(() => {
                dispatch(handleModal(false))
            }, 600);
        }, 4200);
    },[])

    return(
        <animated.div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                background: 'transparent',
                position: 'fixed',
                top: '7%',
                left: '0%',
                overflow: 'hidden',
                zIndex: 30,
                ...springs
            }}
        >
            <Box
                sx={{
                    backgroundColor: isDark == false ? '#ffffff' : '#000000',
                    color: '#ffffff',
                    width: '75%',
                    padding: '20px',
                    marginTop: '30px',
                    borderRadius: '10px',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    position: 'relative',
                }}
            >
                <IconButton
                    sx={{
                        position: 'absolute',
                        top: '2%',
                        right: '2%',
                        color: isDark == false ? '#000000' : '#ffffff',
                    }}
                    onClick={() => {
                        animatedClicked()
                        setTimeout(() => {
                            dispatch(handleModal(false))
                        }, 600);
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <Typography
                    sx={{
                        color: isDark == false ? '#000000' : '#ffffff',
                    }}
                >
                    Text in a modal
                </Typography>
                <Typography 
                    sx={{
                        mt: 2,
                        color: isDark == false ? '#000000' : '#ffffff',
                    }}
                >
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
                <animated.div
                    style={{
                        width: '100%',
                        height: '10px',
                        backgroundColor: '#78ea78',
                        position: 'absolute',
                        bottom: '0%',
                        left: '0%',
                        ...springsBar
                    }}
                >
                </animated.div>
            </Box>
        </animated.div>
    )
}

export default Modal