import { Box, Button, InputBase, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

function Search() {

    const { isDark } = useSelector((state:any) => state.theme as any)

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
                    backgroundColor: isDark == false ?'#ebf0f2' : '#313E40',
                    color: isDark == false ?'#000000' : '#ffffff',
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
                    backgroundColor: isDark == false ? '#5C6F73' : '#d9d9d9',
                    borderRadius: '0px',
                    borderTopRightRadius: '20px',
                    borderBottomRightRadius: '20px',
                    '&:hover':{
                        backgroundColor: isDark == false ? '#5C6F73' : '#d9d9d9',
                    }
                }}
            >
                <Typography
                    sx={{
                        color: isDark == false ? '#ffffff' : '#000000',
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