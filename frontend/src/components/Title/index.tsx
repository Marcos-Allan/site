import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'

function Title() {
    
    const { isDark } = useSelector((state:any) => state.theme as any)

    return(

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
    )
}

export default Title