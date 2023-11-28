import { Box, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Menu() {
    return (
        <Box
            sx={{
                width: '100dvw',
                backgroundColor: '#f5f5f5',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
            >
            <Typography
                variant='h1'
                sx={{
                    paddingLeft: '30px',
                    fontSize: '28px',
                }}
            >
                TechStore
            </Typography>
            <MenuIcon
                sx={{
                    paddingRight: '30px',
                }}
            />
        </Box>
    )
}

export default Menu