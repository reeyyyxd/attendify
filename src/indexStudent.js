import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Modal, Box, TextField, IconButton } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import event2 from "./assets/event2.jpg";
import logoImg from "./assets/logo.png";
import { Link } from "react-router-dom";

const departments = [
  { label: 'Public'},
  { label: 'CCS'},
  { label: 'CASE'},
  { label: 'CEA'},
  { label: 'CMBA'},
  { label: 'CCJ'},
  { label: 'CNAHS'},
];

export default function IndexStudent() {
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [isYearModalOpen, setYearModalOpen] = useState(false);
  const [isSnackbarOpen, setSnackbarOpen] = useState(false); 

  const openSignupModal = () => {
    setSignupModalOpen(true);
  };

  const closeSignupModal = () => {
    setSignupModalOpen(false);
  };

  const openYearModal = () => {
    setYearModalOpen(true);
  };

  const closeYearModal = () => {
    setYearModalOpen(false);
  };

  const handleSnackbarOpen = () => {
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
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


  return (
    <div className="h-screen w-full bg-orange-100">
      <nav className="flex justify-between items-center bg-teal-950 p-4">
        <img className="h-12" src={logoImg} alt="logo" />

        <div className="flex items-center">
          <Button variant="contained" onClick={openSignupModal} sx={{ ml: 'auto',bgcolor: '#052e2e' }}>
            Create Event
          </Button>


           <Button variant="contained" sx={{ ml: 2, bgcolor: '#052e2e' }}>
        <Link to="/login" className="text-white text-decoration-none">
          Log Out
        </Link>
      </Button>
   
        </div>
      </nav>

      <h1 className="text-3xl font-bold text-center mt-4">
        Available Events
      </h1>
      <br/>

      <div className="flex justify-center items-center">
        <Card sx={{ maxWidth: 345, margin: "0 10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              width="345"
              image={event2}
              alt="Event 1"
              sx={{ objectFit: 'cover' }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Christmas Party
              </Typography>
              <Typography variant="body2" color="text.secondary">
                An awesome party.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={openYearModal} >
              Join Event
            </Button>
          </CardActions>
        </Card>




        <Card sx={{ maxWidth: 345, margin: "0 10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              width="345"
              image={event2}
              alt="Event 2"
              sx={{ objectFit: 'cover' }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Another Christmas Party
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Events = more fun (am I right?)
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Join Event
            </Button>
          </CardActions>
        </Card>
      </div>


      <Modal
        open={isSignupModalOpen}
        onClose={closeSignupModal}
        aria-labelledby="signup-modal-title"
        aria-describedby="signup-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="signup-modal-title">Create Event</h2>
          <TextField label="Event Name" id="eventname" variant="outlined" margin="normal" fullWidth />
          <TextField label="Description" id="desc" type="outlined" variant="outlined" margin="normal" fullWidth />

        
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={departments}
            sx={{ width: 330 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Department"
                margin="normal"
                fullWidth
              />
            )}
          />

          <TextField
          id="standard-helperText"
          type="datetime-local"
          defaultValue=""
          helperText="Event Start"
          variant="standard"
          margin="normal"
            fullWidth
        />
          <br/>
          
          <TextField
          id="standard-helperText"
          type="datetime-local"
          defaultValue=""
          helperText="Event End"
          variant="standard"
          margin="normal"
            fullWidth
        />
         
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2}}>
            <Button variant="contained" >
              Create Event
            </Button>
            <Button onClick={closeSignupModal} sx={{ ml: 1 }}>
              Close
            </Button>
          </Box>
        </Box>
      </Modal>


      <Modal
        open={isYearModalOpen}
        onClose={closeYearModal}
        aria-labelledby="year-modal-title"
        aria-describedby="year-modal-description"
      >
        <Box sx={{ ...yearModalStyle, width: 300 }}>
          <h2 id="year-modal-title">Join Event</h2>
          <TextField label="Course and Year" id="year" variant="outlined" margin="normal" fullWidth />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={departments}
            sx={{ width: 235 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Department"
              
              />
            )}
          />


          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button variant="contained" onClick={closeYearModal}>
              Cancel
            </Button>
            <Button variant="contained" onClick={() => { openYearModal(); handleSnackbarOpen(); }} sx={{ ml: 1 }}>
              Confirm

      

            </Button>
          </Box>
        </Box>
      </Modal>

      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Success"
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleSnackbarClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />


    </div>
  );
}
