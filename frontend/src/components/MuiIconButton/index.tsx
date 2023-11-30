import { useDispatch } from "react-redux";
import { handleMenu } from "../../redux/menuSlice";

import { IconButton } from "@mui/material/"
import MenuIcon from '@mui/icons-material/Menu';
function MuiIconButton(){
    
    const dispatch = useDispatch()

    return(
        <IconButton
            onClick={() => dispatch(handleMenu(true))}
            sx={{
                maxWidth: '60px',
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: '9.8px',
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

export default MuiIconButton