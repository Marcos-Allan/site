import FacebookLogin from '@greatsumini/react-facebook-login';

import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { useSpring, animated } from '@react-spring/web'

import facebookIcon from '../../images/Facebook_icon.png'

function FacebookLoginC(){

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
        <animated.div
            onClick={() => {
                animatedClicked()
            }}
            style={{
                backgroundColor: isDark == false ?'#ebf0f2' : '#313E40',
                width: '84%',
                textAlign: 'center',
                borderRadius: '10px',
                margin: '6px 0px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                flexDirection: 'row',
                ...springs
            }}
        >
            <FacebookLogin
                appId="738175478167876"
                onSuccess={(response) => {
                    setTimeout(() => {
                        console.log('Login Success!', response);
                    }, 200);
                }}
                onFail={(error) => {
                    setTimeout(() => {
                        console.log('Login Failed!', error);
                    }, 200);
                }}
                onProfileSuccess={(response) => {
                    setTimeout(() => {
                        console.log('Get Profile Success!', response);
                    }, 200);
                }}
                style={{
                    padding:'16px 0px',
                    flexGrow: 1,
                    color: isDark == false ? '#000000' : '#ffffff',
                    content: 'aaaaaaaaaaaa',
                    backgroundColor: 'transparent',
                    border: 'none',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}
            >
            <Typography
                sx={{
                    flexGrow: 1,
                    color: isDark == false ? '#000000' : '#ffffff',
                }}
                >
                Login Com Facebook
            </Typography>
            <img
                src={facebookIcon}
                style={{
                    marginRight: '15px',
                }}
                />
                </FacebookLogin>
        </animated.div>
    )
}

export default FacebookLoginC