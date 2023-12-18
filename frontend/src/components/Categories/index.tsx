import { Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { useSpring, animated } from '@react-spring/web'
import { handleCategorie } from '../../redux/categorieSlice'

function Categories() {

    const dispatch = useDispatch()
    const { text } = useSelector((state:any) => state.categorie as any)
    const { isDark } = useSelector((state:any) => state.theme as any)
    const [ springs ] = useSpring(
        () => ({
            from: { x: -500, opacity: 0, scale: 1 },
            to: { x: 0, opacity: 1, scale: 1 },
            x: 0,
            opacity: 1,
            config: {
                duration: 350,
                scale: [1, 1, 1],
            }
        })
    )
    
    return(
        <animated.div
            style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                borderRadius: '20px',
                width: '80vw',
                backgroundColor: isDark == false ? '#D9D9D9' : '#5C6F73',
                margin: '0 auto',
                marginTop: '20px',
                marginBottom: '20px',
                padding: '7px 6px',
                ...springs
            }}
        >
            {text == 'Tudo' ? (
                <Typography
                    sx={{
                        flexGrow: 1,
                        textAlign: 'center',
                        color: isDark == false ? '#ffffff' : '#000000' ,
                        fontSize: '15px',
                        fontWeight: '500',
                        fontFamily: 'Aldrich, sans-serif',
                        backgroundColor: isDark == false ? '#5C6F73' : '#d9d9d9',
                        padding: '7px 8px',
                        borderRadius: '20px',
                    }}
                >
                    Tudo
                </Typography>
            ):(
                <Typography
                    onClick={() => dispatch(handleCategorie('Tudo'))}
                    sx={{
                        flexGrow: 1,
                        textAlign: 'center',
                        color: isDark == false ? '#000000' : '#ffffff',
                        fontSize: '15px',
                        fontWeight: '500',
                        fontFamily: 'Aldrich, sans-serif',
                        padding: '5px 8px',
                        borderRadius: '16px',
                    }}
                >
                    Tudo
                </Typography>
            )}
            {text == 'Camisas' ? (
                <Typography
                    sx={{
                        flexGrow: 1,
                        textAlign: 'center',
                        color: isDark == false ? '#ffffff' : '#000000' ,
                        fontSize: '15px',
                        fontWeight: '500',
                        fontFamily: 'Aldrich, sans-serif',
                        backgroundColor: isDark == false ? '#5C6F73' : '#d9d9d9',
                        padding: '7px 8px',
                        borderRadius: '20px',
                    }}
                >
                    Camisas
                </Typography>
            ) : (
                <Typography
                    onClick={() => dispatch(handleCategorie('Camisas'))}
                    sx={{
                        flexGrow: 1,
                        textAlign: 'center',
                        color: isDark == false ? '#000000' : '#ffffff',
                        fontSize: '15px',
                        fontWeight: '500',
                        fontFamily: 'Aldrich, sans-serif',
                        padding: '5px 8px',
                        borderRadius: '16px',
                    }}
                >
                    Camisas
                </Typography>
            )}
            {text == 'Sapatos' ? (
                <Typography
                    sx={{
                        flexGrow: 1,
                        textAlign: 'center',
                        color: isDark == false ? '#ffffff' : '#000000' ,
                        fontSize: '15px',
                        fontWeight: '500',
                        fontFamily: 'Aldrich, sans-serif',
                        backgroundColor: isDark == false ? '#5C6F73' : '#d9d9d9',
                        padding: '7px 8px',
                        borderRadius: '20px',
                    }}
                >
                    Sapatos
                </Typography>
            ) : (
                <Typography
                    onClick={() => dispatch(handleCategorie('Sapatos'))}
                    sx={{
                        flexGrow: 1,
                        textAlign: 'center',
                        color: isDark == false ? '#000000' : '#ffffff',
                        fontSize: '15px',
                        fontWeight: '500',
                        fontFamily: 'Aldrich, sans-serif',
                        padding: '5px 8px',
                        borderRadius: '16px',
                    }}
                >
                    Sapatos
                </Typography>
            )}
            {text == 'Calças' ? (
                <Typography
                    sx={{
                        flexGrow: 1,
                        textAlign: 'center',
                        color: isDark == false ? '#ffffff' : '#000000' ,
                        fontSize: '15px',
                        fontWeight: '500',
                        fontFamily: 'Aldrich, sans-serif',
                        backgroundColor: isDark == false ? '#5C6F73' : '#d9d9d9',
                        padding: '7px 8px',
                        borderRadius: '20px',
                    }}
                >
                    Calças
                </Typography>
            ):(
                <Typography
                    onClick={() => dispatch(handleCategorie('Calças'))}
                    sx={{
                        flexGrow: 1,
                        textAlign: 'center',
                        color: isDark == false ? '#000000' : '#ffffff',
                        fontSize: '15px',
                        fontWeight: '500',
                        fontFamily: 'Aldrich, sans-serif',
                        // backgroundColor: 'red',
                        padding: '5px 8px',
                        borderRadius: '16px',
                    }}
                >
                    Calças
                </Typography>
            )}
        </animated.div>
    )
}

export default Categories