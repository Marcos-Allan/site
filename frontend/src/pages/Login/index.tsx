import  Cookies from 'universal-cookie'
import { useEffect, useState } from "react";

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

import MenuLateral from "../../components/MenuLateral";

import GoogleLogin from '../../components/GoogleLogin'
import FacebookLoginC from '../../components/FacebookLogin';

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
    
    const cookies = new Cookies()

    const googleLogin = async () => {
        // window.open('http://localhost:3000/auth/google', 'popup', 'width=360, height=550')
        window.open('http://localhost:3000/auth/google', '_self')

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
        setRestart(!restart)
    }
    

    useEffect(() => {
        console.log(isLogged, first_name, last_name, img)

        const userL = cookies.get('zUser')
        if(userL){
            setUser(userL)
            const userC = {
                isLogged: true,
                first_name: userL.given_name,
                last_name: userL.family_name,
                img: userL.picture
            }
            dispatch(changeUser(userC))
        }
        
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
                    <GoogleLogin event={googleLogin} />
                    <FacebookLoginC />

                </Box>
            )}

            <MenuLateral />
        </Box>
    )
}

export default Login