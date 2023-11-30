import { Typography } from '@mui/material'

function Title() {
    return(
        <Typography
                variant='h1'
                sx={{
                    fontSize: '22px',
                    fontFamily: 'Aldrich, sans-serif',
                    flex: 1,
                    padding: '0px 10px',
                }}
            >
                TechStore
            </Typography>
    )
}

export default Title