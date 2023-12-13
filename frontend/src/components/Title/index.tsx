import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Title() {
    
    const { isDark } = useSelector((state:any) => state.theme as any)

    return(

        <Link to='/'>
            <Typography
                variant='h1'
                sx={{
                    color: isDark == false ? '#000000' : '#ffffff',
                    fontSize: '22px',
                    fontFamily: 'Aldrich, sans-serif',
                    flexGrow: 2,
                    padding: '0px 10px',
                }}
            >
                TechStore
            </Typography>
        </Link>
    )
}

export default Title