import { Drawer, Typography, Box } from '@mui/material'
import { useDispatch, useSelector } from "react-redux"
import { handleDarkMode } from '../../redux/themeSlice'
import { handleMenu } from '../../redux/menuSlice'

function MenuLateral() {

    const dispatch = useDispatch()
    const { isDark } = useSelector((state:any) => state.theme as any)
    const { isOpen } = useSelector((state:any) => state.menu as any)

    return(
        <Drawer
          anchor='left'
          open={isOpen}
          onClose={() => dispatch(handleMenu(false))}
      >
        <Box
                    p={2}
                    width='66vw'
                    height='100%'
                    textAlign='center'
                    role='presentation'
                    sx={{
                        backgroundColor: isDark == false ? '#ffffff' : '#000000',
                    }}
                >
                    <Typography
                        variant='h6'
                        component='div'
                        sx={{ 
                            color: isDark == false ? '#000000' : '#ffffff',
                        }}
                    >
                        TechStore Menu
                    </Typography>
                    <Typography
                        onClick={() => {
                          dispatch(handleDarkMode(!isDark))
                          dispatch(handleMenu(false))
                        }}
                        variant='h6'
                        component='div'
                        sx={{ 
                            color: isDark == false ? '#000000' : '#ffffff',
                        }}
                    >
                        { isDark == false ? 'Dark' : 'Light' }
                    </Typography>
                </Box>
      </Drawer>
    )
}
export default MenuLateral