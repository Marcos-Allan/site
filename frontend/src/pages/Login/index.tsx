// const googleClientId = '653003675525-b05q2v3i6r29kk295at4edhvdq8unpiv.apps.googleusercontent.com'
// const googleSecretKey = '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'

// import { GoogleLogin } from "@react-oauth/google"
// import { jwtDecode, JwtPayload } from "jwt-decode";

import { useEffect, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

import { Box, Typography, Drawer } from '@mui/material'
import Menu from '../../components/Menu'

import { useDispatch, useSelector } from 'react-redux'
import { handleMenu } from '../../redux/menuSlice'
import { changeUser } from '../../redux/userSlice'
import { handleDarkMode } from '../../redux/themeSlice'

interface User {
    given_name: string,
    family_name: string,
    picture: string,
}

function Login() {

    const { isDark } = useSelector((state:any) => state.theme as any)

    const {
        isLogged,
        first_name,
        last_name,
        img
    } = useSelector((state:any) => state.user as any)

    const { isOpen } = useSelector((state:any) => state.menu as any)
  
    const dispatch = useDispatch()

    const [user, setUser] = useState<User>()


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
                setUser(res.data)

                const userS = await {
                    isLogged: true,
                    first_name: res.data ? res.data.given_name : 'uA',
                    last_name: res.data ? res.data.family_name : 'uM',
                    img: res.data ? res.data.picture : 'uI'
                }

                dispatch(changeUser(userS))

                console.log(first_name)
            } catch (error) {
                console.log(error)
            }
        },
    });

    useEffect(() => {
        console.log(isLogged, first_name, last_name, img)
    },[])

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
            
            {user && user.picture && (
                <div
                    style={{
                        marginBottom: '200px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',    
                    }}>
                    <img src={user.picture} style={{ width: '80px', height: '80px', borderRadius: '50%',}} />

                    <p style={{ fontWeight: 'light', fontSize: '20px', color: '#a5a5a5', marginTop: '40px',}}>{user.given_name} {user.family_name}</p>
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
                            margin: '6px 0px'
                        }}
                    >
                        <Typography
                            sx={{
                                color: isDark == false ? '#000000' : '#ffffff',
                            }}
                        >
                            Login Com Google
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            backgroundColor: isDark == false ?'#ebf0f2' : '#313E40',
                            width: '84%',
                            padding:'16px 0px',
                            textAlign: 'center',
                            borderRadius: '10px',
                            margin: '6px 0px'
                        }}
                    >
                        <Typography
                            sx={{
                                color: isDark == false ? '#000000' : '#ffffff',
                            }}
                        >
                            Login Com Email
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            backgroundColor: isDark == false ?'#ebf0f2' : '#313E40',
                            width: '84%',
                            padding:'16px 0px',
                            textAlign: 'center',
                            borderRadius: '10px',
                            margin: '6px 0px'
                        }}
                    >
                        <Typography
                            sx={{
                                color: isDark == false ? '#000000' : '#ffffff',
                            }}
                        >
                            Login Com Facebook
                        </Typography>
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

            <Drawer
                anchor='left'
                open={isOpen}
                onClose={() => dispatch(handleMenu(false))}
            >
                <Box
                    p={2}
                    width='66vw'
                    height='100%'
                    textAlign='center'
                    role='presentation'
                    sx={{
                        backgroundColor: isDark == false ? '#ffffff' : '#000000',
                    }}
                >
                    <Typography
                        variant='h6'
                        component='div'
                        sx={{ 
                            color: isDark == false ? '#000000' : '#ffffff',
                        }}
                    >
                        TechStore Menu
                    </Typography>
                    
                    <Typography
                        onClick={() => {
                            dispatch(handleDarkMode(!isDark))
                            dispatch(handleMenu(false))
                        }}
                        variant='h6'
                        component='div'
                        sx={{ 
                            color: isDark == false ? '#000000' : '#ffffff',
                        }}
                    >
                        { isDark == false ? 'Dark' : 'Light' }
                    </Typography>
                </Box>
            </Drawer>
        </Box>
    )
}

export default Login