import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Modal, Box, TextField } from '@mui/material';
import event2 from "./assets/event2.jpg";
import logoImg from "./assets/logo.png";

export default function IndexStudent() {
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);

  const openSignupModal = () => {
    setSignupModalOpen(true);
  };

  const closeSignupModal = () => {
    setSignupModalOpen(false);
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

  return (
    <div className="h-screen w-full bg-orange-100">
      <nav className="flex justify-between items-center bg-teal-950 p-4">
        <img className="h-12" src={logoImg} alt="logo" />

        <div className="flex items-center">
          <Button variant="contained" onClick={openSignupModal} sx={{ ml: 'auto',bgcolor: '#052e2e' }}>
            Create Event
          </Button>
          <Button variant="contained" sx={{ ml: 2, bgcolor: '#052e2e'}}>
            Log Out
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
            <Button size="small" color="primary">
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
          <TextField label="Event Name" id="lusername" variant="outlined" margin="normal" fullWidth />
          <TextField label="Details" id="lpassword" type="password" variant="outlined" margin="normal" fullWidth />

         
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
    </div>
  );
}
