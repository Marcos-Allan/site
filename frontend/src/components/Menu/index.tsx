import { Box } from '@mui/material';

import Title from '../Title';
import OptionsButtons from '../OptionsButtons';
import Search from '../Search';
import MuiIconButton from '../MuiIconButton';
import MuiReturnButton from '../MuiReturnButton';

interface Props {
    signs: boolean
}

function Menu(props: Props) {

    return (
        <Box
            sx={{
                position: 'fixed',
                top: '0%',
                left: '0%',
                width: '100vw',
                minHeight: props.signs == true ? '40px' : '112px',
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
            {props.signs == false && (
                <>
                    <OptionsButtons />

                    <Search />
                </>
            )}
            {props.signs == true && (
                <>
                    <MuiReturnButton />
                    <MuiIconButton />
                </>
            )}
        </Box>
    )
}

export default Menu