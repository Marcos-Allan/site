import { IconButton } from "@mui/material/"
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function MuiReturnButton(){

    const { isDark } = useSelector((state:any) => state.theme as any)

    const navigate = useNavigate()

    return(
        <IconButton
            onClick={() => navigate(-1)}
            sx={{
                maxWidth: '60px',
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: '9.8px',
                color: isDark == false ? '#5C6F73' : '#d9d9d9',
            }}
        >
            <KeyboardReturnIcon 
                sx={{
                    textAlign: 'center',
                    fontSize: '30px',
                }}
            />
        </IconButton>
    )
}

export default MuiReturnButton