import { useContext } from "react"
import { Box, Grid, IconButton, useTheme } from "@mui/material"
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { ColorModeContext } from "../../theme"

const TopBar = () => {
    const theme = useTheme()
    const colorMode = useContext(ColorModeContext)
    return (
        <Box display='flex' justifyContent='space-between' px='32px' py='24px' width='100%'> 
            <Grid>Welcome, admin</Grid>
            <Box display='flex'>
            <Grid onClick={colorMode.toggleColorMode}>
                <IconButton>
                    { theme.palette.mode === 'dark' ? (<DarkModeIcon/>) : (<LightModeIcon/>) } 
                </IconButton >
            </Grid>
            </Box>        
        </Box>
    )
}

export default TopBar
