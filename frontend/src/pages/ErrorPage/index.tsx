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
                backgroundColor: '#d9d9d9',
            }}
        >
            <Typography
                variant='h1'
                sx={{
                    fontSize: '28px',
                    maxWidth: '70vw',
                    lineHeight: '40px',
                    textAlign: 'center',
                    fontFamily: 'Aldrich, sans-serif',
                }}
                >
                Erro 404! página não encontrada
            </Typography>
            <Link to={'/'}>
                <Button 
                    variant='contained'
                    sx={{
                        padding: '20px 100px',
                        width: '70vw',
                        maxWidth: '90vw',
                        marginTop: '20px',
                        backgroundColor: '#5C6F73',
                        borderRadius: '14px',
                        '&:hover':{
                            backgroundColor: '#5C6F73',
                        }
                    }}
                >
                    <Typography
                        variant='subtitle2'
                        sx={{
                            fontSize: '24px',
                            textTransform: 'capitalize',
                            fontFamily: 'Aldrich, sans-serif',
                        }}
                        >
                        retornar
                    </Typography>
                </Button>
            </Link>
        </Box>
    )
}

export default ErrorPage