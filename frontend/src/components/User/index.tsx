import { useState } from 'react'
import { Box, Typography, Menu, MenuItem, Fade } from '@mui/material'
import { logout } from '../../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux';

export default function User(){

    const dispatch = useDispatch()
    const { isLogged, img, first_name } = useSelector((state:any) => state.user as any)

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const { isDark } = useSelector((state:any) => state.theme as any)

    return (
        <>
        <Box
            sx={{
                zIndex: 11,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                flexDirection: 'row',
            }}
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
            <img src={img} style={{ width: '45px', height: '45px', borderRadius: '50%',}} />
            <Typography
                sx={{
                    fontSize: '18px',
                    fontFamily: 'Aldrich',
                    color: isDark == false ? '#5C6F73' : '#d9d9d9',
                    paddingLeft: '8px',
                }}
            >
            {`${first_name}`}
            </Typography>
        </Box>

        <Menu
            id="fade-menu"
            MenuListProps={{
            'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
        >
            <MenuItem
                onClick={() => {
                    handleClose()
                    if(isLogged == true){
                        window.open('http://localhost:3000/auth/logout',  '_self')
                        dispatch(logout())
                    }else{
                        return
                    }
                }}
            >Logout</MenuItem>
        </Menu>
    </>
    )
}