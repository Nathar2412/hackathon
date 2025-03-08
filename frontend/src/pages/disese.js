import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Grid, Container, Typography, Grid2, Modal, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const DiseaseList = () => {
    const [show, setShow] = useState(false)

    const { control, handleSubmit } = useForm({
        defaultValues: {
            name: "John Doe",
            mobile: "9876543210",
            email: "demo@gmail.com",
            password: "password",
            userDetails: {
                street: "123 Main St",
                door_no: "A-1",
                district: "New York",
                state: "New York",
                pincode: "10001",
                blood_group: "O+",
                specialization: "Cardiologist",
                reportingPerson: "Dr. Jane Doe",
                nextVisit: "2021-12-31"
            }
        }
    });

    const onSubmit = (data) => {
        console.log("Form Data:", data);
    };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        { field: "name", headerName: "Name", width: 150 },
        { field: "type", headerName: "Type", width: 150 },
        { field: "syrum", headerName: "Syrum", width: 150 },
        { field: "routientime", headerName: "Routine Time", width: 150 }
    ];

    const rows = [
        { id: 1, name: "test1", type: "blood", syrum: "blood", routientime: "12:00:00" },
        { id: 2, name: "cholestral", type: "blood", syrum: "blood", routientime: "12:00:00" },
        { id: 3, name: "bp", type: "blood", syrum: "blood", routientime: "12:00:00" }
    ];

    const handleClose = () => {
        setShow(false)
    }
    const handleOpen = () => {
        setShow(true)
    }

    return (
        <>

            <Modal
                open={show}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'white',
                        borderRadius: 2,
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={2}>

                            <Grid item xs={12}>
                                <Controller
                                    name="name"
                                    control={control}
                                    render={({ field }) => <TextField fullWidth label="Name" {...field} />}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Controller
                                    name="type"
                                    control={control}
                                    render={({ field }) => <TextField fullWidth label="Type" {...field} />}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Controller
                                    name="syrum"
                                    control={control}
                                    render={({ field }) => <TextField fullWidth label="Syrum" {...field} />}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Controller
                                    name="routientime"
                                    control={control}
                                    render={({ field }) => <TextField fullWidth label="Routine Time" {...field} />}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary" fullWidth type="submit">
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Modal>

            <Container maxWidth="lg ">
                <Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" fullWidth type="submit" onClick={handleOpen}>
                            Add Disease
                        </Button>
                    </Grid>
                </Grid>
                <Typography variant="h5" align="center" gutterBottom>
                    User Form
                </Typography>

                <Typography variant="h5" align="center" gutterBottom sx={{ marginTop: 3 }}>
                    Test Data
                </Typography>
                <div style={{ height: 300, width: "100%" }}>
                    <DataGrid rows={rows} columns={columns} pageSize={5} />
                </div>
            </Container>
        </>
    );
};

export default DiseaseList;
