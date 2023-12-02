import { Button, Card, CardActions, CardContent, FormControl, MenuItem, Select, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import BookAppointment from './BookAppointment';

const DoctorList = () => {
  const [specality, setSpecality] = useState('');
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleChange = (event) => {
    setSpecality(event.target.value);
  };
  return (
    <div>
      <div style={{display:'flex'}}>
      <FormControl variant="filled" style={{width:'200px',margin:'auto'}}>
        <label htmlFor="">Select Speciality</label>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={specality}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </div>
       <Card style={{width:'40%',margin:'auto'}}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
         Doctor Name : Ocean Garner
        </Typography>
        <Typography sx={{ fontSize: 14 }}  component="div">
          Speciality:PULMONOLOGIST
        </Typography>
        <Typography sx={{ mb: 1.5 }}>
          rating
        </Typography>
      </CardContent>
      <CardActions className='cardActions'>
        <Button variant="contained" color="primary" onClick={handleOpen} >Book Appoitment</Button>
        <Button variant="contained" className='bookappBtn'>View Details</Button>
      </CardActions>
    </Card>
    <BookAppointment open={open} handleClose = {handleClose}/>
    </div>
  )
}

export default DoctorList