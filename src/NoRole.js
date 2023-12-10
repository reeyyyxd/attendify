import React, { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Modal, Box, TextField, IconButton } from '@mui/material';
import logoImg from "./assets/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



export default function NoRole() {
    const navigate = useNavigate();

   
    
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');   

    const [isSignupModalOpen, setSignupModalOpen] = useState(false);
    const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);
    const [isYearModalOpen, setYearModalOpen] = useState(false);
  
    const openSignupModal = () => {
      setSignupModalOpen(true);
    };
  
    const closeSignupModal = () => {
      setSignupModalOpen(false);
    };
  
    const openConfirmationModal = () => {
      setConfirmationModalOpen(true);
    };
  
    const closeConfirmationModal = () => {
      setConfirmationModalOpen(false);
    };
  
    const openYearModal = () => {
      setYearModalOpen(true);
    };
  
    const closeYearModal = () => {
      setYearModalOpen(false);
    };
  
    const handleUpdateInformation = () => {
      // Perform the update logic here
      // For now, let's just close the confirmation modal
      closeConfirmationModal();
      // You can add your update logic here
    };
  
    

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff8dc',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    borderRadius: "15px",
  };

  const yearModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  const handleClick = (e, id) => {
    e.preventDefault();
  
    const updateUser = { firstname, lastname, email, password };
    console.log(updateUser);
  
    fetch(`http://localhost:8080/user/updateUser?id=${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateUser),
    }).then(() => {
      console.log("Updated");
    });
  };


  return (
    <div className="h-screen w-full bg-orange-100">
      <nav className="flex justify-between items-center bg-teal-950 p-4">
        <img className="h-12" src={logoImg} alt="logo" />
        

        <div className="flex items-center">
          <Button variant="contained" onClick={openSignupModal} sx={{ ml: 'auto',bgcolor: '#052e2e' }}>
            Edit Information
          </Button>


           <Button variant="contained" sx={{ ml: 2, bgcolor: '#052e2e' }}>
        <Link to="/login" className="text-white text-decoration-none">
          Log Out
        </Link>
      </Button>
        </div>
      </nav>

      <h1 className="text-3xl font-bold text-center mt-4">
        Waiting for Verification
      </h1>
      <br/>

      <h2 style={{ textAlign: 'center' }}>
    Please wait until the administrator has verified you.
        </h2>
 
    
    
        <Modal
        open={isSignupModalOpen}
        onClose={closeSignupModal}
        aria-labelledby="signup-modal-title"
        aria-describedby="signup-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="signup-modal-title">Edit Information</h2>
          <TextField label="First Name" id="firstname" variant="outlined" margin="normal" fullWidth
          value={firstname}
          onChange={(e)=>setFirstname(e.target.change)}
          />
          <TextField label="Last Name" id="lastname" type="outlined" variant="outlined" margin="normal" fullWidth
          value={lastname}
          onChange={(e)=>setLastname(e.target.change)}
          />

          <TextField label="Email" id="email" type="outlined" variant="outlined" margin="normal" fullWidth
          value={email}
          onChange={(e)=>setEmail(e.target.change)}
          />

          <TextField label="Password" id="password" type="password" variant="outlined" margin="normal" fullWidth
          value={password}
          onChange={(e)=>setPassword(e.target.change)}
          />

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2,  }}>
        <Button sx={{bgcolor: "	#008080"}} variant="contained" onClick={(e) => handleClick(e)}>
            Update
        </Button>
        <Button onClick={closeSignupModal} sx={{ ml: 1 }}>
            Close
        </Button>
        </Box>
        </Box>
      </Modal>


         <Modal
        open={isConfirmationModalOpen}
        onClose={closeConfirmationModal}
        aria-labelledby="confirmation-modal-title"
        aria-describedby="confirmation-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="confirmation-modal-title">Confirmation</h2>
          <Typography id="confirmation-modal-description" sx={{ mt: 2 }}>
            Are you sure you want to update your information?
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button variant="contained" onClick={handleUpdateInformation}>
              Yes, Update
            </Button>
            <Button onClick={closeConfirmationModal} sx={{ ml: 1 }}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
