import { Box, Typography } from '@mui/material';

import OptionsButtons from '../OptionsButtons';
import Search from '../Search';

function Menu() {

    return (
        <Box
            sx={{
                width: '100dvw',
                backgroundColor: '#D9D9D9',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '14px',
                flexWrap: 'wrap',
            }}
            >
            <Typography
                variant='h1'
                sx={{
                    fontSize: '22px',
                    fontFamily: 'Aldrich, sans-serif',
                    flex: 1,
                    paddingLeft: '30px',
                    paddingRight: '28px',
                }}
            >
                TechStore
            </Typography>

            <OptionsButtons />

            <Search />
        </Box>
    )
}

export default Menu