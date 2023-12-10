import { Box, Button, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import img1 from '../../images/Rectangle_mobile-2.png'
import img2 from '../../images/Rectangle_mobile-1.png'
import img3 from '../../images/Rectangle_mobile.png'

import { useSpring, animated } from '@react-spring/web'

interface Product {
    descont: string,
    price: string,
    image: any,
    id: string,
}

function CardProduct(props: Product) {

    const { isDark } = useSelector((state:any) => state.theme as any)
    
    const [springsClick, apiClick] = useSpring(
        () => ({
            from: { x: 500 },
            to: { x: 0 },
            x: 0,
            config: {
                duration: 350
            }
        })
    )

    function animatedClicked() {
        apiClick.start({
            to: [
                { x: 100,},
                { x: -100,},
                { x: 0 }
            ]
        })
    }

    return(
        <animated.div
            id={props.id}
            style={{
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
                ...springsClick
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

            <Link to={`/product/${props.id}`}>
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
            </Link>

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
                    onClick={animatedClicked}
                    variant='contained'
                    sx={{
                        height: '36px',
                        width: '91%',
                        position: 'absolute',
                        bottom: '5%',
                        backgroundColor: isDark == false ? '#ebf0f2' : '#313E40',
                        '&:hover':{
                            backgroundColor: isDark == false ? '#ebf0f2' : '#313E40',
                        }
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Aldrich, sans-serif',
                            color: isDark == false ? '#000000' : '#ffffff',
                            zIndex: 12,
                        }}
                    >
                        Add to cart
                    </Typography>
                </Button>
        </animated.div>
    )
}

export default CardProduct