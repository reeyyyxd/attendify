import React, { useState, useEffect } from "react";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Modal, Box, TextField, IconButton, Paper } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import event2 from "./assets/event2.jpg";
import logoImg from "./assets/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

//haha i fooled you
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
  const navigate = useNavigate();
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [isYearModalOpen, setYearModalOpen] = useState(false);
  const [isSnackbarOpen, setSnackbarOpen] = useState(false); 
  const [events, setEvents] =useState([]);
  const [eventname, setEventname] =useState('');
  const [department, setDepartment] =useState('');
  const [startdate, setStartdate] =useState('');
  const [timestart, setTimestart] =useState('');
  const [timeend, setTimeend] =useState('');
  const [courseandyear, setCourseandyear] = useState('');
  const [jdepartment, setJdepartment] = useState('');



    const handleCreateEvent = async () => {
      try {
        const response = await fetch("http://localhost:8080/event/createEvent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ eventname, department, startdate, timestart, timeend }),
        });

        if (response.ok) {
          // Event creation was successful
          handleSnackbarOpen();

          // Optionally, you can navigate to a different page after creating the event
          setTimeout(() => {
            navigate("/indexStudent");
          }, 1500);
        } else {
          // Handle errors when creating the event
          console.error("Event Creation Failed");
        }
      } catch (error) {
        console.error("Error creating event:", error);
      }
    };

    

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

  useEffect(() => {
    
    if (isSnackbarOpen) {
      const timeoutId = setTimeout(() => {
        setSnackbarOpen(false);
      }, 6000); 

      return () => clearTimeout(timeoutId);
    }
  }, [isSnackbarOpen]);


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

  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:8080/event/getAllEvents");
      const data = await response.json();
      setEvents(data); // assuming the API returns an array of events
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []); 


  
  const handleJoinEvent = async () => {
    try {
      const response = await fetch("http://localhost:8080/attendance/insertrecord", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseandyear, jdepartment }), 
      });

      if (response.ok) {
        // Handle success, e.g., show a success message or navigate to another page
        handleSnackbarOpen();

        setTimeout(() => {
          navigate("/joined");
        }, 1500);
      } else {
        // Handle errors when joining the event
        console.error("Join Event Failed");
      }
    } catch (error) {
      console.error("Error joining event:", error);
    }
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
       {events.map((event) => (
      <Paper key={event.id} sx={{ maxWidth: 345, margin: "0 10px" }}>
        <CardActionArea>
          {/* <CardMedia
            component="img"
            height="200"
            width="345"
            alt={event.eventname}
            //src={event2}  
            sx={{ objectFit: 'cover' }}
          /> */}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Event Name: {event.eventname}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Department: {event.department}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Date: {event.startdate}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Time Start: {event.timestart}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Time End: {event.timeend}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={openYearModal}>
            Join Event
          </Button>
        </CardActions>
      </Paper>
    ))}
  </div>

  

      <Modal
        open={isSignupModalOpen}
        onClose={closeSignupModal}
        aria-labelledby="signup-modal-title"
        aria-describedby="signup-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="signup-modal-title">Create Event</h2>
          <TextField label="Event Name" id="eventname" variant="outlined" margin="normal" fullWidth 
          value={eventname}
          onChange={(e) => setEventname(e.target.value)}
          />

           
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

                value={department}
            onChange={(e) => setDepartment(e.target.value)}
              />
            )}
          />  

         <TextField
            id="event-start-date"
            label="Start Date"
            type="date"
            variant="outlined"
            margin="normal"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            value={startdate}
            onChange={(e) => setStartdate(e.target.value)}
          />

          <TextField
            id="event-start-time"
            label="Time Start"
            type="time"
            variant="outlined"
            margin="normal"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 minutes interval
            }}
            value={timestart}
            onChange={(e) => setTimestart(e.target.value)}
          />

          <TextField
            id="event-end-time"
            label="Time End"
            type="time"
            variant="outlined"
            margin="normal"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 minutes interval
            }}
            value={timeend}
            onChange={(e) => setTimeend(e.target.value)}
          />

        
          {/* <Autocomplete
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
        /> */}
         
         <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2}}>
            <Button variant="contained" onClick={handleCreateEvent}>
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
        <TextField
          label="Course and Year"
          id="year"
          variant="outlined"
          margin="normal"
          fullWidth
          value={courseandyear}
          onChange={(e) => setCourseandyear(e.target.value)}
        />

          <TextField
          label="Department"
          id="year"
          variant="outlined"
          margin="normal"
          fullWidth
          value={jdepartment}
          onChange={(e) => setJdepartment(e.target.value)}
        />
         

        {/* <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={departments}
          sx={{ width: 235 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Department"
              value={jdepartment}
              onChange={(e) => setJdepartment(e.target.value)}
            />
          )}
        /> */}


        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button variant="contained" onClick={closeYearModal}>
            Cancel
          </Button>
          <Button
          variant="contained"
          onClick={handleJoinEvent}
          sx={{ ml: 1 }}
        >
          Confirm
        </Button>

        </Box>
      </Box>
      </Modal>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Success!"
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