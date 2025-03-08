import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Grid, Container, Typography } from "@mui/material";

const PatientSignupForm = () => {
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
                reportingPerson: "Dr. Jane Doe",
                nextVisit: "2021-12-31"
            }
        }
    });

    const onSubmit = (data) => {
        console.log("Form Data:", data);
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h5" align="center" gutterBottom>
                Doctor signup
            </Typography>
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
                            name="mobile"
                            control={control}
                            render={({ field }) => <TextField fullWidth label="Mobile" {...field} />}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => <TextField fullWidth label="Email" type="email" {...field} />}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            name="password"
                            control={control}
                            render={({ field }) => <TextField fullWidth label="Password" type="password" {...field} />}
                        />
                    </Grid>
                    {Object.keys(control._defaultValues.userDetails).map((key) => (
                        <Grid item xs={12} key={key}>
                            <Controller
                                name={`userDetails.${key}`}
                                control={control}
                                render={({ field }) => <TextField fullWidth label={key.replace(/_/g, ' ')} {...field} />}
                            />
                        </Grid>
                    ))}
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" fullWidth type="submit">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default PatientSignupForm;
