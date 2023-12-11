import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { useSpring, animated } from '@react-spring/web'

function Categories() {

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
                padding: '12px 0px',
                ...springs
            }}
        >
            <Typography
                sx={{
                    color: isDark == false ? '#000000' : '#ffffff',
                    fontSize: '15px',
                    fontWeight: '500',
                    fontFamily: 'Aldrich, sans-serif',
                }}
            >
                Camisas
            </Typography>
            <Typography
                sx={{
                    color: isDark == false ? '#000000'  :'#ffffff',
                    fontSize: '15px',
                    fontWeight: '500',
                    fontFamily: 'Aldrich, sans-serif',
                }}
            >
                Sapatos
            </Typography>
            <Typography
                sx={{
                    color: isDark == false ? '#000000' : '#ffffff',
                    fontSize: '15px',
                    fontWeight: '500',
                    fontFamily: 'Aldrich, sans-serif',
                }}
            >
                Calças
            </Typography>
            <Typography
                sx={{
                    color: isDark == false ? '#000000' : '#ffffff',
                    fontSize: '15px',
                    fontWeight: '500',
                    fontFamily: 'Aldrich, sans-serif',
                }}
            >
                Chapéus
            </Typography>
        </animated.div>
    )
}

export default Categories