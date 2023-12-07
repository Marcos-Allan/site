import { CircularProgress } from '@mui/material'
import { useSelector } from 'react-redux'

function Loading() {
    
    const { isDark } = useSelector((state:any) => state.theme as any)

    return(
        <CircularProgress
        size={60}
            variant='indeterminate'
            sx={{
                display: 'block',
                width: '50px',
                height: '50px',
                fontSize: '1000px',
                margin: '20px auto',
                color: isDark == false ? '#2e3c41' : '#ebf0f2',
            }}
        />
    )
}

export default Loading