import { CircularProgress } from '@mui/material'
import { useSelector } from 'react-redux'

interface Props {
    size: number
}

function Loading(props: Props) {
    
    const { isDark } = useSelector((state:any) => state.theme as any)

    return(
        <CircularProgress
        size={props.size}
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