import {
    AppBar,
    Box,
    CssBaseline,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import { getTestDetails } from "../Reducers/Login/action";
import DiseaseList from "./disese";
import Patient from "./patient";
import Tests from "./tests";

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

const DoctorDashboard = () => {

    const userDetails = useSelector((state) => state.userData);
    console.log("userDetails=>", userDetails);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getTestDetails("http://192.168.68.32:3000/api/testdetails/6"));

    }, [])

    const handleAddData = () => {
    };

    return (
        // <Router>
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <Navbar />
            <Sidebar />
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, ml: `${drawerWidth}px`, mt: "64px" }}
            >
                {/* <Routes>
                    <Route path="/tests" element={<Tests />} />
                    <Route path="/disease" element={<DiseaseList />} />
                    <Route path="/patient" element={<Patient />} />
                </Routes> */}
            </Box>
            <div>
                content
                <button onClick={handleAddData}>Add Data</button>
            </div>
        </Box>
        // </Router>
    );
}
export default DoctorDashboard;