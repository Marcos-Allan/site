// const googleClientId = '653003675525-b05q2v3i6r29kk295at4edhvdq8unpiv.apps.googleusercontent.com'
// const googleSecretKey = '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'

// import { GoogleLogin } from "@react-oauth/google"
// import { jwtDecode, JwtPayload } from "jwt-decode";

import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

function Login() {

    const [user, setUser] = useState<any>()

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
            } catch (error) {
                console.log(error)
            }
        },
    });

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                width: '100dvw',
                height: '100dvh',
            }}
        >
            {!user && (
                <div onClick={() => login()}>
                    Fazer Login com o Google
                </div>
            )}
            
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

            {/* <GoogleLogin
                onSuccess={credentialResponse => {
                    const credentialResponseDecoded = jwtDecode<JwtPayload>(credentialResponse.credential)
                    console.log(credentialResponseDecoded);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            /> */}
        </div>
    )
}

export default Login