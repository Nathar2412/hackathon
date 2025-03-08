import React, { Component } from "react";
import "../style.css";
import CustomInput from "../components/Custominput";
import Button from "../components/Button";
import { Link } from "@mui/material";
// import CustomInput from "./components/CustomInput";
// import Button from "./components/Button";

export default class App extends Component {
    state = {
        email: "",
        password: ""
    };

    handleChange = e => {

        console.log(JSON.stringify(this.state))
        this.setState({ [e.currentTarget.id]: e.currentTarget.value });
    };

    render() {
        return (
            <div className="App">
                <form className="form">
                    <CustomInput
                        labelText="Email"
                        id="email"
                        formControlProps={{
                            fullWidth: true
                        }}
                        handleChange={this.handleChange}
                        type="text"
                    />
                    <CustomInput
                        labelText="Password"
                        id="password"
                        formControlProps={{
                            fullWidth: true
                        }}
                        handleChange={this.handleChange}
                        type="password"
                    />

                    <Button type="button" color="primary" className="form__custom-button">
                        Log in
                    </Button>
                    <Link href="#">Signup as a Doctor</Link>
                    <Link href="#">Signup as a Patient</Link>
                </form>
            </div>
        );
    }
}
