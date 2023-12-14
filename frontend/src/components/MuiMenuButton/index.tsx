import { useDispatch, useSelector } from "react-redux";
import { handleMenu } from "../../redux/menuSlice";

import { IconButton } from "@mui/material/"
import MenuIcon from '@mui/icons-material/Menu';

function MuiMenuButton(){
    
    const dispatch = useDispatch()

    const { isDark } = useSelector((state:any) => state.theme as any)

    return(
        <IconButton
            onClick={() => dispatch(handleMenu(true))}
            sx={{
                maxWidth: '60px',
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginRight: '9.8px',
                color: isDark == false ? '#5C6F73' : '#d9d9d9',
                justifySelf: 'flex-end',
                alignContent: 'flex-end',
            }}
        >
            <MenuIcon 
                sx={{
                    textAlign: 'center',
                    fontSize: '30px',
                }}
            />
        </IconButton>
    )
}

export default MuiMenuButton