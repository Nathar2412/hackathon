import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, CssBaseline, Box } from "@mui/material";
import Tests from "./tests";
import Disease from "./disese";
import Patient from "./patient";

const drawerWidth = 240;

const Sidebar = () => (
    <Drawer
        variant="permanent"
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
        }}
    >
        <Toolbar />
        <List>
            <ListItem button component={Link} to="/tests">
                <ListItemText primary="Tests" />
            </ListItem>
            <ListItem button component={Link} to="/disease">
                <ListItemText primary="Disease" />
            </ListItem>
            <ListItem button component={Link} to="/patient">
                <ListItemText primary="patient" />
            </ListItem>
        </List>
    </Drawer>
);

const Navbar = () => (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
            <Typography variant="h6" noWrap component="div">
                MUI Dashboard
            </Typography>
        </Toolbar>
    </AppBar>
);


export default function DoctorDashboard() {
    return (
        <Router>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <Navbar />
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3, ml: `${drawerWidth}px`, mt: "64px" }}>
                    <Routes>
                        <Route path="/tests" element={<Tests />} />
                        <Route path="/disease" element={<Disease />} />
                        <Route path="/patient" element={<Patient />} />
                    </Routes>
                </Box>
                <div>content

                </div>
            </Box>
        </Router>
    );
}
