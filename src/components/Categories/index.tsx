import { Box, Typography } from '@mui/material'

function Categories() {
    return(
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                borderRadius: '20px',
                width: '80vw',
                backgroundColor: '#d9d9d9',
                margin: '0 auto',
                marginTop: '20px',
                marginBottom: '20px',
                padding: '12px 0px'
            }}
        >
            <Typography
                sx={{
                    color: '#000000',
                    fontSize: '15px',
                    fontWeight: '500',
                    fontFamily: 'Aldrich, sans-serif',
                }}
            >
                Camisas
            </Typography>
            <Typography
                sx={{
                    color: '#000000',
                    fontSize: '15px',
                    fontWeight: '500',
                    fontFamily: 'Aldrich, sans-serif',
                }}
            >
                Sapatos
            </Typography>
            <Typography
                sx={{
                    color: '#000000',
                    fontSize: '15px',
                    fontWeight: '500',
                    fontFamily: 'Aldrich, sans-serif',
                }}
            >
                Calças
            </Typography>
            <Typography
                sx={{
                    color: '#000000',
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