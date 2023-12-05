import { Box, Button, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

import img1 from '../../images/Rectanglemobile-2.png'
import img2 from '../../images/Rectanglemobile-1.png'
import img3 from '../../images/Rectanglemobile.png'

interface Product {
    descont: string,
    price: string,
    image: any,
}

function CardProduct(props: Product) {

    const { isDark } = useSelector((state:any) => state.theme as any)

    return(
        
        <Box
            sx={{
                backgroundColor: isDark == false ? '#D9D9D9' : '#5C6F73',
                width: '260px',
                overflow: 'hidden',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                borderRadius: '12px',
                padding: '20px',
                paddingTop: '14px',
                paddingBottom: '50px',
                marginBottom: '20px',
            }}
        >
                <Box
                sx={{
                    width: '60px',
                    backgroundColor: Number(props.descont) <= 50 ? '#fd7c7c' : '#a9fd7c',
                    position: 'absolute',
                    top: '0%',
                    right: '0%',
                    borderTopRightRadius: '12px',
                    padding: '6px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderBottomLeftRadius: '90px',
                }}
            >
                <Typography
                    sx={{
                        color: isDark == false ? '#000000' : '#000000',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        fontWeight: 'light',
                        fontSize: '19px',
                        fontFamily: 'Aldrich, sans-serif',
                    }}
                >
                    -{props.descont}%
                </Typography>
            </Box>
            
            {props.image == 'img1' && (
                <img src={img1} />
            )}
            {props.image == 'img2' && (
                <img src={img2} />
            )}
            {props.image == 'img3' && (
                <img src={img3} />
            )}
            {props.image !== 'img1' && props.image !== 'img2' && props.image !== 'img3' && (
                <img
                    style={{
                        width: '263px',
                        height: '182px',
                        borderRadius: '14px',
                    }}
                    src={props.image}
                />
            )}

            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    padding: '10px 0px',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography
                    sx={{
                        fontFamily: 'Aldrich, sans-serif',
                        color: isDark == false ? '#000000' : '#ffffff'
                    }}
                    >
                    U$ {props.price}
                </Typography>
            </Box>
            <Button
                variant='contained'
                sx={{
                    height: '36px',
                    width: '91%',
                    position: 'absolute',
                    bottom: '5%',
                    backgroundColor: isDark == false ? '#8FA1A6' : '#313E40',
                    '&:hover':{
                        backgroundColor: isDark == false ? '#8FA1A6' : '#313E40',
                    }
                }}
            >
                <Typography
                    sx={{
                        fontFamily: 'Aldrich, sans-serif',
                        color: isDark == false ? '#000000' : '#ffffff',
                    }}
                >
                    Add to cart
                </Typography>
            </Button>
        </Box>
    )
}

export default CardProduct