import { Link } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

interface Props {
    text: string,
    link: string,
    clicked: any,
}

function MuiButton(props: Props) {

    const { isDark } = useSelector((state:any) => state.theme as any)

    return(
        <Link to={props.link}>
                    <Button
                        onClick={props.clicked}
                        sx={{
                            backgroundColor: isDark == false ? '#5C6F73' : '#d9d9d9',
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
                                backgroundColor: isDark == false ? '#5C6F73' : '#d9d9d9',
                            }
                        }}
                        >
                        <Typography
                            sx={{
                                color: isDark == false ? '#ffffff' : '#000000',
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