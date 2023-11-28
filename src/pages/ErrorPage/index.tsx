import { Link } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'

function ErrorPage(){
    return (
        <Box
            sx={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <Typography
                variant='h1'
                sx={{
                    fontSize: '28px',
                }}
                >
                Erro 404! página não encontrada
            </Typography>
            <Link to={'/'}>
                <Button 
                    variant='contained'
                    sx={{
                        padding: '20px 100px',
                        maxWidth: '90vw',
                        marginTop: '20px',
                        backgroundColor: '#656565',
                    }}
                >
                    <Typography
                        variant='subtitle2'
                        sx={{
                            fontSize: '24px',
                            textTransform: 'capitalize',
                        }}
                        >
                        Voltar para Home
                    </Typography>
                </Button>
            </Link>
        </Box>
    )
}

export default ErrorPage