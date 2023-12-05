import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

function Categories() {

    const { isDark } = useSelector((state:any) => state.theme as any)

    return(
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                borderRadius: '20px',
                width: '80vw',
                backgroundColor: isDark == false ? '#D9D9D9' : '#5C6F73',
                margin: '0 auto',
                marginTop: '20px',
                marginBottom: '20px',
                padding: '12px 0px'
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
        </Box>
    )
}

export default Categories