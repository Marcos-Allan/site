import { Link } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'
import { useSelector } from 'react-redux'

function ErrorPage(){

    const { isDark } = useSelector((state:any) => state.theme as any)

    return (
        <Box
            sx={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundColor: isDark == false ? '#ebf0f2' : '#2e3c41',
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
                    color: isDark == false ? '#000000' : '#ffffff'
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
                        backgroundColor: isDark == false ? '#d9d9d9' : '#5C6F73',
                        borderRadius: '14px',
                        '&:hover':{
                            backgroundColor: isDark == false ? '#d9d9d9' : '#5C6F73',
                        }
                    }}
                >
                    <Typography
                        variant='subtitle2'
                        sx={{
                            fontSize: '24px',
                            textTransform: 'capitalize',
                            fontFamily: 'Aldrich, sans-serif',
                            color: isDark == false ? '#000000' : '#ffffff'
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