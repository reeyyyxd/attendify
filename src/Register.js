import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImg from "./assets/logo.png";
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';


export default function Register() {
  const navigate = useNavigate();

  const [idNumber, setIdNumber] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);

  const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleClick = async (e) => {
    e.preventDefault();
  
    if (!idNumber || !firstname || !lastname || !email || !password) {
      setSuccessMessage('');
      setAlertMessage('All fields must be filled out');
      console.error('All fields must be filled out');
      setTimeout(() => {
        setAlertMessage('');
      }, 3000);
      return;
    }
  
    if (!isPasswordValid(password)) {
      setSuccessMessage('');
      setAlertMessage('Password does not meet the criteria');
      console.error('Password does not meet the criteria');
      setTimeout(() => {
        setAlertMessage('');
      }, 3000);
      return;
    }

    const register = { idNumber, firstname, lastname, email, password };

    fetch("http://localhost:8080/user/createUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(register),
    })
      .then(() => {
        setSnackbarOpen(true);

        setTimeout(() => {
          navigate("/login");
        }, 6000);
      })
      .catch((error) => {
        console.error("Registration failed", error);
      });
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className="h-screen w-full bg-orange-100">
      <nav className="bg-teal-950">
        <img className="h-12" src={logoImg} alt="logo" />
        <a href="/login" className="text-white ml-4 absolute top-5 right-28 h-16 w-16">
          Sign In
        </a>
      </nav>
  
      <div className="bg-orange-50 my-11 max-w-[400px] w-full mx-auto p-8 px-8 rounded-lg">
        <form className="">
          <h2 className="text-3xl dark:text-black font-bold text-center">
            Sign Up
          </h2>
          <br />
  
          <TextField
            id="idNumber"
            label="ID Number"
            variant="outlined"
            className="w-full p-3 mt-4"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
          />
          <br/>
          <br/>

          <TextField
            id="firstName"
            label="First Name"
            variant="outlined"
            className="w-full p-3 mt-4"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <br/>
          <br/>

          <TextField
            id="lastName"
            label="Last Name"
            variant="outlined"
            className="w-full p-3 mt-4"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <br/>
          <br/>

          <TextField
            id="email"
            label="Email Address"
            variant="outlined"
            className="w-full p-3 mt-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br/>
          <br/>

          <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          className="w-full p-3 mt-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {(!password || (password && !isPasswordValid(password))) && (
          <Typography variant="caption" color="error">
            {password ? (
              <>
                {password.length < 8 && "Password must be at least 8 characters long. "}
                {password.length >= 8 && !/[A-Z]/.test(password) && "Include at least one uppercase letter. "}
                {password.length >= 8 && !/\d/.test(password) && "Include at least one digit. "}
                {password.length >= 8 && !/[!@#$%^&*()?]/.test(password) && "Include at least one special character. "}
              </>
            ) : (
              ""
            )}
          </Typography>
        )}
        <br />
        <br />

        {/* Place the success and error messages above the Register button */}
        {successMessage && (
          <div className="mb-4">
            <Alert severity="success">
              <strong>{successMessage}</strong>
            </Alert>
          </div>
        )}

        {alertMessage && (
          <Alert severity="error">
            {alertMessage}
          </Alert>
        )}

        {/* Register button */}
        <button
          type="submit"
          className="w-full p-3 mt-4 bg-teal-950 text-white rounded-md"
          onClick={handleClick}
        >
          Register
        </button>

        <br/>
        <br/>


      <Snackbar open={isSnackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          Registered Successfully!
        </Alert>
      </Snackbar>
    
        <Link to="/login" className="text-black hover:underline">
          Already have an account? Login here.
        </Link>
      </form>
    </div>
  </div>
);
        }