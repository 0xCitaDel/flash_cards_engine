import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme,
} from '@mui/material'
import { ChevronLeftOutlined } from "@mui/icons-material"
import { navMenu } from "@common/moks/navigate"

const Sidebar = (props) => {
    const [active, setActive] = useState('')
    const {isNonMobile, drawerWidth, isOpen, setIsOpen} = props
    const {pathname}= useLocation()
    const navigate = useNavigate()
    const theme = useTheme()

    useEffect(() => {
       setActive(pathname.substring(1)) 
    }, [pathname])

    return (
        <Box component='nav'>
            {isOpen && (
                <Drawer
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    variant='persistent'
                    anchor='left'
                    sx={{
                        width: drawerWidth,
                        '& .MuiDrawer-paper': {
                            color: theme.palette.secondary.main,
                            backgroundColor: theme.palette.primary.main,
                            boxSizing: 'border-box',
                            width: drawerWidth
                        }
                    }}
                >
                    <Box width='100%'>
                        <Box display='flex' justifyContent='space-between' alignItems='center'>
                            <Box display='flex' alignItems='center' >
                                <Typography>Demo</Typography>
                            </Box> 
                            {!isNonMobile && (
                                <IconButton onClick={() => setIsOpen(!isOpen)}>
                                    <ChevronLeftOutlined />    
                                </IconButton>
                            )}
                        </Box>
                        <List>
                            {
                                navMenu.map((e, id) => {
                                    return (
                                        <ListItem
                                            key={id}
                                            onClick={() => navigate(`${e.path}`)}
                                        >
                                            <ListItemText>
                                                <Typography>{e.name}</Typography>
                                            </ListItemText>
                                        </ListItem>
                                    )
                                })
                            }
                            <ListItem onClick={() => navigate()}></ListItem>
                        </List>
                    </Box>
                </Drawer>
            )} 
        </Box>
    )
}

export default Sidebar
