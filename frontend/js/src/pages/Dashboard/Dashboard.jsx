import { Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import TopBar from '@components/TopBar'
import Sidebar from "@components/Sidebar"
import { useMediaQuery, Box } from "@mui/material"

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(true)
    const location = useLocation()
    const isNonMobile = useMediaQuery('(min-width:600px)')
    return (
            <Box display={isNonMobile ? 'flex':'block'} 
                width='100%' 
                height='100%'>
                <Sidebar
                    isNonMobile={isNonMobile}
                    drawerWidth='250px'
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                /> 
                <Box width='100%'>
                    <TopBar/> 
                    <Outlet/>
                </Box>        
            </Box>
    )
}

export default Dashboard
