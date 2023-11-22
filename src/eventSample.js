import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, IconButton, Menu, MenuItem } from '@mui/material';
import event2 from "./assets/event2.jpg";
import logoImg from "./assets/logo.png";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function IndexStudent() {
  const [proofImage, setProofImage] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const onDrop = (acceptedFiles) => {
    setProofImage(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: "image/*" });

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="h-screen w-full bg-orange-100">
      <nav className="flex justify-between items-center bg-teal-950 p-4">
        <img className="h-12" src={logoImg} alt="logo" />
        <div className="flex items-center">
          <Button variant="contained" sx={{ ml: 2, bgcolor: '#052e2e' }}>
            <Link to="/login" className="text-white text-decoration-none">
              Log Out
            </Link>
          </Button>
        </div>
      </nav>

      <Link to="/indexStudent">
        <IconButton color="primary" sx={{ mt: 4 }}>
          <ArrowBackIcon fontSize="large" />
        </IconButton>
      </Link>
      <br/>

      <div className="flex justify-center items-center">
        <Card sx={{ maxWidth: 500, margin: "20 10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height={2} // Adjust the height as needed
              image={proofImage ? URL.createObjectURL(proofImage) : event2}
              alt="Event 1"
              sx={{ objectFit: 'cover' }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Christmas Party
              </Typography>
              <Typography variant="body2" color="text.secondary">
                50 participants
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Starts at: 10:00 AM
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ends at: 3:30 PM
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>


          <Button size="small" color="primary">
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                Upload Proof of Attendance
              </div>
            </Button>

            <Button size="small" color="primary" onClick={handleMenuClick}>
              Options
            </Button>
            <Menu
              id="options-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>State Reasons</MenuItem>
              <MenuItem onClick={handleMenuClose}>Leave</MenuItem>
              
            </Menu>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
