// const googleClientId = '653003675525-b05q2v3i6r29kk295at4edhvdq8unpiv.apps.googleusercontent.com'
// const googleSecretKey = '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'

// import { GoogleLogin } from "@react-oauth/google"
// import { jwtDecode, JwtPayload } from "jwt-decode";
import  Cookies from 'universal-cookie'
import { useEffect, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

import { Link } from 'react-router-dom'

import { Box } from '@mui/material'
import Menu from '../../components/Menu'

import { useDispatch, useSelector } from 'react-redux'
import { changeUser } from '../../redux/userSlice'

interface User {
    isLogged: boolean,
    first_name: string,
    last_name: string,
    img: string,
}

import gmailIcon from '../../images/Gmail_icon.png'

import MenuLateral from "../../components/MenuLateral";

import GoogleLogin from '../../components/GoogleLogin'

import ButtonLogin from "../../components/ButtonLogin";
import FacebookLoginC from "../../components/FacebookLogin";

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
    const cookies = new Cookies()
    useEffect(() => {
        console.log(isLogged, first_name, last_name, img)
        

        const userSaved = localStorage.getItem('user')
        if(userSaved){
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
            <Link
                to='http://localhost:3000/auth/google'
                onClick={() => {
                    const userL = cookies.get('zUser')
                    console.log(userL.email)
                    console.log(userL.given_name)
                    console.log(userL.family_name)
                    console.log(userL.picture)
                    setUser(userL)
                    const userC = {
                        isLogged: true,
                        first_name: userL.given_name,
                        last_name: userL.family_name,
                        img: userL.picture
                    }
                    dispatch(changeUser(userC))
                }}
            >
                    Google ? :)
            </Link>
            {/* <Link to='http://localhost:5173/auth'>Google ? :)</Link> */}
            
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
                    <GoogleLogin event={login} />
                    <FacebookLoginC />
                    {/* <ButtonLogin event={login} icon={facebookIcon} platformName="Facebook" /> */}
                    <ButtonLogin event={login} icon={gmailIcon} platformName="Gmail" />

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