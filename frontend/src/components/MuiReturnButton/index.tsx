import { IconButton } from "@mui/material/"
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Link } from "react-router-dom";
function MuiReturnButton(){

    return(
        <Link to={'/'}>
            <IconButton
                sx={{
                    maxWidth: '60px',
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: '9.8px',
                }}
            >
                <KeyboardReturnIcon 
                    sx={{
                        textAlign: 'center',
                        fontSize: '30px',
                    }}
                    />
            </IconButton>
        </Link>
    )
}

export default MuiReturnButton