import React from 'react'
import { Routes, Route } from 'react-router-dom' 

import { ColorModeContext, useMode } from '@theme'
import { CssBaseline, ThemeProvider } from '@mui/material'

import PrivateRoute from '@pages/PrivateRoute'
import Login from '@pages/Login'

import Layout from '@components/Layout'
import Public from '@components/Public'

import Welcome from '@privatePages/Welcome'
import UsersList from '@privatePages/UsersList'
import Dashboard from '../Dashboard'
import Settings from '../Dashboard/Settings'

function App() {
    const [theme, colorMode] = useMode()
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div className="App">
                    <Routes>
                        <Route path='/' element={<Layout/>}>

                            {/* Public routes */}
                            <Route index element={<Public />}/>
                            <Route path='login' element={<Login />}/>
                            <Route path='dashboard' element={<Dashboard/>}>
                                <Route index element={<div>Index from Dashboard</div>}/>
                                <Route path='settings' element={<Settings />}/>
                            </Route>


                            {/* Public routes */}
                            <Route element={<PrivateRoute />}>
                                <Route path='welcome' element={<Welcome />}/>
                                <Route path='userslist' element={<UsersList />}/>
                            </Route>
                            
                        </Route>
                    </Routes>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
} 

export default App;
