import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { useSpring, animated } from '@react-spring/web'

import googleIcon from '../../assets/icons/Google_icon.png'
import Loading from '../Loading'

interface Props{
    event: any,
    loading: boolean,
}

function ButtonLogin(props: Props){

    const { isDark } = useSelector((state:any) => state.theme as any)
    
    const [ springs, apiClick ] = useSpring(
        () => ({
            from: { x: 0, opacity: 1, scale: 1 },
            to: { x: 0, opacity: 1, scale: 1 },
            x: 0,
            opacity: 1,
            config: {
                duration: 350,
                scale: [1, 1, 1],
            }
        })
    )

    function animatedClicked() {
        apiClick.start({
            to: [
                { opacity: 1, scale: 1 },
                { opacity: 0.5, scale: 0.9 },
                { opacity: 1, scale: 1 },
            ],
                config: {
                    duration: 150,
                }
        })
    }
    
    return(
        (props.loading == false ? (
            <animated.div
                onClick={() => {
                    animatedClicked()
                    setTimeout(() => {
                        props.event()
                    }, 200);
                }}
                style={{
                    backgroundColor: isDark == false ? '#ebf0f2' : '#313E40',
                    width: '84%',
                    padding:'16px 0px',
                    textAlign: 'center',
                    borderRadius: '10px',
                    maxHeight: '72px',
                    margin: '6px 0px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    flexDirection: 'row',
                    ...springs
                }}
            >
                <Typography
                    sx={{
                        flexGrow: 1,
                        color: isDark == false ? '#000000' : '#ffffff',
                    }}
                >
                    Login Com Google
                </Typography>
                <img
                    src={googleIcon}
                    style={{
                        marginRight: '15px',
                    }}
                />
            </animated.div>
        ):(
            <animated.div
                style={{
                    backgroundColor: isDark == false ? '#ebf0f290' : '#313E4090',
                    width: '84%',
                    padding:'16px 0px',
                    textAlign: 'center',
                    height: '40px',
                    borderRadius: '10px',
                    margin: '6px 0px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    flexDirection: 'row',
                    ...springs
                }}
            >
                <Loading size={24} />
                <img
                    src={googleIcon}
                    style={{
                        marginRight: '15px',
                    }}
                />
            </animated.div> 
        ))
    )
}

export default ButtonLogin