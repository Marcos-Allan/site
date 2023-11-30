import { Box } from '@mui/material';

import Title from '../Title';
import OptionsButtons from '../OptionsButtons';
import Search from '../Search';

function Menu() {

    return (
        <Box
            sx={{
                position: 'fixed',
                top: '0%',
                left: '0%',
                width: '100vw',
                minHeight: '112px',
                backgroundColor: '#D9D9D9',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '14px',
                flexWrap: 'wrap',
                zIndex: 11,
            }}
            >
            <Title />

            <OptionsButtons />

            <Search />
        </Box>
    )
}

export default Menu