import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import logoImg from "./assets/logo.png";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

export default function AdminRole() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    idNumber: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    isSSG: '',
  });

  const { idNumber, firstname, lastname, email, password, isSSG } = user;

  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    // Load user data on mount
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    handleDialogOpen();
  };

  const updateUserData = async () => {
    try {
      await axios.put(`http://localhost:8080/student/updateStudent/${id}`, user);
      handleDialogClose();
      navigate("/verification");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const loadUser = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/student/getAllStudents`);
      console.log(result.data); // Log the data to the console
      setUser(result.data);
    } catch (error) {
      console.error("Error loading user:", error);
    }
  };
  
  return (
    <div className="h-screen w-full bg-orange-100">
      <nav className="bg-teal-950">
        <img className="h-12" src={logoImg} alt="logo" />
      </nav>

      <form className="flex items-center w-full ms-8 pt-6 space-x-4" onSubmit={onSubmit}>
        <div className="flex-grow">
          <TextField
            label="ID Number"
            variant="outlined"
            fullWidth
            defaultValue={idNumber}
            onChange={onInputChange}
            name="idNumber"
          />
        </div>

        <div className="flex-grow">
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            defaultValue={firstname}
            onChange={onInputChange}
            name="firstname"
          />
        </div>

        <div className="flex-grow">
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            defaultValue={lastname}
            onChange={onInputChange}
            name="lastname"
          />
        </div>

        <div className="flex-grow">
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            defaultValue={email}
            onChange={onInputChange}
            name="email"
          />
        </div>

       

        <div className="flex-grow">
        <TextField
            label="isSSG"
            variant="outlined"
            fullWidth
            defaultValue={isSSG}  // Change from value to defaultValue
            onChange={onInputChange}
            name="isSSG"
        />
        </div>

        <div className="w-1/6">
          <Button variant="contained" type="submit" sx={{ ml: "auto", bgcolor: "#F0E68C" }}>
            Update
          </Button>
        </div>

        <div className="w-1/6">
          {/* Use Link component and onClick handler to navigate */}
          <Link to="/verification" variant="contained" sx={{ ml: "auto", bgcolor: "#F0E68C" }}>
            Cancel
          </Link>
        </div>
      </form>

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Confirm Update</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to update the user data?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={updateUserData} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
