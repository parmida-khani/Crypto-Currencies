import {Outlet} from "react-router-dom";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Header() {
    return (
        <div>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static" sx={{bgcolor: "#242933"}}>
                    <Toolbar>
                        <Typography component="div" sx={{flexGrow: 1, fontWeight: "bold"}}>
                            Crypto Project
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Outlet/>
        </div>
    )
}

export default Header