import React, { Component, useState } from "react";
import "../style.css";
import CustomInput from "../components/Custominput";
import Button from "../components/Button";
import { Link } from "@mui/material";
import { useDispatch } from "react-redux";
import { getLogin } from "../Reducers/Login/action";
// import CustomInput from "./components/CustomInput";
// import Button from "./components/Button";

const App = () => {
    const dispatch = useDispatch()

    const [getState, setState] = useState({
        email: "",
        password: ""
    })
    // state = ;
    const handleLogin = () => {
        window.location.href = "/doctor-dashboard"
        // this.props.navigate("/login"); // Navigate to login page
    };

    const handleChange = e => {

        console.log(JSON.stringify(getState))
        dispatch(getLogin("http://192.168.68.32:3000/api/auth/login", { email: getState.email, password: getState.password }));
        setState({ [e.currentTarget.id]: e.currentTarget.value });
    };

    // render() {
    return (
        <div className="App">
            <form className="form">
                <CustomInput
                    labelText="Email"
                    id="email"
                    formControlProps={{
                        fullWidth: true
                    }}
                    handleChange={handleChange}
                    type="text"
                />
                <CustomInput
                    labelText="Password"
                    id="password"
                    formControlProps={{
                        fullWidth: true
                    }}
                    handleChange={handleChange}
                    type="password"
                />

                <Button type="button" color="primary" className="form__custom-button" onClick={handleLogin}
                >
                    Log in
                </Button>
                <Link to="/doctor-signup">Signup as a Doctor</Link>
                <Link to="/patient-signup">Signup as a Patient</Link>

            </form>
        </div>
    );
}
// }


export default App;