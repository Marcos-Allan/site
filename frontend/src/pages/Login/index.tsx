// const googleClientId = '653003675525-b05q2v3i6r29kk295at4edhvdq8unpiv.apps.googleusercontent.com'
// const googleSecretKey = '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'

// import { GoogleLogin } from "@react-oauth/google"
// import { jwtDecode, JwtPayload } from "jwt-decode";

import { useEffect, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

import { Box, Typography } from '@mui/material'
import Menu from '../../components/Menu'

import { useDispatch, useSelector } from 'react-redux'
import { changeUser } from '../../redux/userSlice'

interface User {
    isLogged: boolean,
    first_name: string,
    last_name: string,
    img: string,
}

import googleIcon from '../../images/Google_icon.png'
import facebookIcon from '../../images/Facebook_icon.png'
import gmailIcon from '../../images/Gmail_icon.png'
import MenuLateral from "../../components/MenuLateral";

function Login() {

    const { isDark } = useSelector((state:any) => state.theme as any)
    
    const {
        isLogged,
        first_name,
        last_name,
        img
    } = useSelector((state:any) => state.user as any)
  
    const dispatch = useDispatch()

    const [user, setUser] = useState<User>()
    const [restart, setRestart] = useState<boolean>(true)


    const login = useGoogleLogin({
        onSuccess: async (response) => {
            try {
                const res = await axios.get(
                    'https://www.googleapis.com/oauth2/v3/userinfo',
                    {
                        headers: {
                            Authorization: `Bearer ${response.access_token}`
                        }
                    }
                )
                console.log(res.data)
                
                const userS = {
                    isLogged: true,
                    first_name: res.data ? res.data.given_name : 'uA',
                    last_name: res.data ? res.data.family_name : 'uM',
                    img: res.data ? res.data.picture : 'uI'
                }
                setUser(userS)
                setRestart(!restart)
                
                dispatch(changeUser(userS))

            } catch (error) {
                console.log(error)
            }
        },
    });
    
    useEffect(() => {
        console.log(isLogged, first_name, last_name, img)

        const userSaved = localStorage.getItem('user')
        if(userSaved){
            console.log(JSON.parse(userSaved))
            setUser(JSON.parse(userSaved))
        }
    },[restart])

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                width: '100dvw',
                height: '100dvh',
                backgroundColor: isDark == false ? '#ebf0f2' : '#313E40',
            }}
            >

            <Menu signs={true} />
            
            {user && user.img && (
                <div
                    style={{
                        marginBottom: '200px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',    
                    }}>
                    <img src={user.img} style={{ width: '80px', height: '80px', borderRadius: '50%',}} />

                    <p style={{ fontWeight: 'light', fontSize: '20px', color: '#a5a5a5', marginTop: '40px',}}>{user.first_name} {user.last_name}</p>
                </div>
            )}

            {!user && (
                <Box
                    sx={{
                        width: '75vw',
                        backgroundColor: isDark == false ? '#d9d9d9' : '#5C6F73',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        borderRadius: '10px',
                        padding: '14px',
                    }}
                    >
                    <Box
                        onClick={() => login()}
                        sx={{
                            backgroundColor: isDark == false ?'#ebf0f2' : '#313E40',
                            width: '84%',
                            padding:'16px 0px',
                            textAlign: 'center',
                            borderRadius: '10px',
                            margin: '6px 0px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            flexDirection: 'row',
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
                    </Box>

                    <Box
                        sx={{
                            backgroundColor: isDark == false ?'#ebf0f2' : '#313E40',
                            width: '84%',
                            padding:'16px 0px',
                            textAlign: 'center',
                            borderRadius: '10px',
                            margin: '6px 0px',
                            display: 'flex',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            sx={{
                                flexGrow: 1,
                                color: isDark == false ? '#000000' : '#ffffff',
                            }}
                        >
                            Login Com Email
                        </Typography>
                        <img
                            src={facebookIcon}
                            style={{
                                marginRight: '15px',
                            }}
                        /> 
                    </Box>

                    <Box
                        sx={{
                            backgroundColor: isDark == false ?'#ebf0f2' : '#313E40',
                            width: '84%',
                            padding:'16px 0px',
                            textAlign: 'center',
                            borderRadius: '10px',
                            margin: '6px 0px',
                            display: 'flex',
                            justifyContent: 'space-around',
                            alignItems: 'center',
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
                            src={gmailIcon}
                            style={{
                                marginRight: '15px',
                            }}
                        />
                    </Box>

                </Box>
            )}


            {/* <GoogleLogin
                onSuccess={credentialResponse => {
                    const credentialResponseDecoded = jwtDecode<JwtPayload>(credentialResponse.credential)
                    console.log(credentialResponseDecoded);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            /> */}

            <MenuLateral />
        </Box>
    )
}

export default Login