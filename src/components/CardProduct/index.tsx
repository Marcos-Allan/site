import { Box, Button, Typography } from '@mui/material'

import img1 from '../../images/Rectanglemobile-2.png'
import img2 from '../../images/Rectanglemobile-1.png'
import img3 from '../../images/Rectanglemobile.png'

interface Product {
    descont: number,
    price: string,
    image: any,
}

function CardProduct(props: Product) {

    return(
        <Box
            sx={{
                backgroundColor: '#D9D9D9',
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
            {props.descont <= 39 ? (
                <Box
                sx={{
                    width: '60px',
                    backgroundColor: '#fd7c7c',
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
                        color: '#000000',
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
            ) : (
                <Box
                sx={{
                    width: '60px',
                    backgroundColor: '#a9fd7c',
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
                        color: '#000000',
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
            )}

            {props.image == 'img1' && (
                <img src={img1} />
            )}
            {props.image == 'img2' && (
                <img src={img2} />
            )}
            {props.image == 'img3' && (
                <img src={img3} />
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
                        color: '#ffffff'
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
                    backgroundColor: '#5C6F73',
                    '&:hover':{
                        backgroundColor: '#5C6F73',
                    }
                }}
            >
                <Typography
                    sx={{
                        fontFamily: 'Aldrich, sans-serif',
                        color: '#ffffff',
                    }}
                >
                    Add to cart
                </Typography>
            </Button>
        </Box>
    )
}

export default CardProduct