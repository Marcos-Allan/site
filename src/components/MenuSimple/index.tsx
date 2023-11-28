import { Box, Typography } from '@mui/material';

function MenuSimple() {

    return (
        <Box
            sx={{
                width: '100dvw',
                backgroundColor: '#f5f5f5',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '14px',
            }}
            >
            <Typography
                variant='h1'
                sx={{
                    paddingLeft: '30px',
                    fontSize: '22px',
                    fontFamily: 'Aldrich, sans-serif',
                    flex: 1,
                    paddingRight: '8px',
                }}
            >
                TechStore
            </Typography>
        </Box>
    )
}

export default MenuSimple