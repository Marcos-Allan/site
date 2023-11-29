import { Box, Button, InputBase, Typography } from '@mui/material'

function Search() {
    return(
        <Box
            sx={{
                flexGrow: 1,
                display: 'flex',
                width: '100%',
                padding: '0px 20px',
                marginTop: '20px',
                marginBottom: '10px',
            }}
        >
            <InputBase
                sx={{
                    flexGrow: 1,
                    backgroundColor: '#EBF0F2',
                    borderTopLeftRadius: '20px',
                    borderBottomLeftRadius: '20px',
                    padding: '0px 20px',
                    fontFamily: 'Aldrich, sans-serif',
                }}
                placeholder='Search the TechStore'
            />
            <Button
                variant='contained'
                sx={{
                    backgroundColor: '#5C6F73',
                    borderRadius: '0px',
                    borderTopRightRadius: '20px',
                    borderBottomRightRadius: '20px',
                    '&:hover':{
                        backgroundColor: '#5C6F73',
                    }
                }}
            >
                <Typography
                    sx={{
                        color: '#ffffff',
                        textTransform: 'capitalize',
                        fontFamily: 'Aldrich, sans-serif',
                    }}
                >
                    Search
                </Typography>
            </Button>
        </Box>
    )
}

export default Search