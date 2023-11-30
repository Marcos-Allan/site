import { Link } from 'react-router-dom'
import { Button, Typography } from '@mui/material'

interface Props {
    text: string,
    link: string,
    clicked: any,
}

function MuiButton(props: Props) {
    return(
        <Link to={props.link}>
                    <Button
                        onClick={props.clicked}
                        sx={{
                            backgroundColor: '#5C6F73',
                            padding: '4px 10px',
                            borderRadius: '10px',
                            flexGrow: 1,
                            minWidth: '54px',
                            margin: '0px 5px',
                            height: '42px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            '&:hover':{
                                backgroundColor: '#5C6F73',
                            }
                        }}
                        >
                        <Typography
                            sx={{
                                color: '#ffffff',
                                fontFamily: 'Aldrich, sans-serif',
                                fontSize: '12px',
                                textAlign: 'center',
                                textTransform: 'capitalize',
                            }}
                            >
                            {props.text}
                        </Typography>
                    </Button>
                </Link>
    )
}

export default MuiButton