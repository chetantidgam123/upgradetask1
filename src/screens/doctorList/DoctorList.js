import { Button, Card, CardActions, CardContent, FormControl, MenuItem, Select, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Rating } from '@material-ui/lab';
import BookAppointment from './BookAppointment';
import { get_data } from '../../util/fetch';
import DoctorDetails from './DoctorDetails';

const DoctorList = () => {
  const [specality, setSpecality] = useState('');
  const [doctorData, setDoctorData] = useState('');
  const [doctorDetails, setDoctorDetails] = useState('');
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose1 = () => setOpen1(false);
  const [open1, setOpen1] = useState(false);
  const handleOpen1 = () => setOpen1(true);

  const handleChange = (event) => {
    setSpecality(event.target.value);
    getDoctorList();
  };

  const [specialityList, setSpecalityList] = useState([])
  const getDoctorSpeciality = () => {
    get_data('/doctors/speciality', {})
      .then((res) => {
        if (res.data.length > 0) {
          setSpecalityList(res.data)
        }
      }).catch((e) => {

      })
  }

  const [doctorList, setDoctorList] = useState([])
  const getDoctorList = () => {
    get_data('/doctors',{ speciality: specality })
      .then((res) => {
        if (res.data.length > 0) {
          setDoctorList(res.data)
        }
      }).catch((e) => {

      })
  }
  

  useEffect(() => {
    getDoctorSpeciality();
    getDoctorList()
  }, []);
  
  useEffect(() => {
    getDoctorList()
  }, [specality]);

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <FormControl variant="filled" style={{ width: '200px', margin: 'auto' }}>
          <label htmlFor="">Select Speciality</label>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={specality}
            onChange={handleChange}
          >
            {specialityList.map((e,i) => <MenuItem key={i} value={e}>{e}</MenuItem>)}
          </Select>
        </FormControl>
      </div>
      {doctorList.map((e, i) =>
        <Card key={i} style={{ width: '40%', margin: '10px auto'  }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Doctor Name :{e.firstName + " " + e.lastName}
            </Typography>
            <Typography sx={{ fontSize: 14 }} component="div">
              Speciality:{e.speciality}
            </Typography>
            <Typography  sx={{ mb: 1.5 }} component="legend">Rating:
              <Rating
                name="simple-controlled"
                value={e.rating}
                readOnly
              /></Typography>
          </CardContent>
          <CardActions className='cardActions'>
            <Button variant="contained" color="primary" onClick={() => { setDoctorData(e); handleOpen() }} >Book Appointment</Button>
            <Button variant="contained" className='bookappBtn' onClick={() => { setDoctorDetails(e); handleOpen1() }}>View Details</Button>
          </CardActions>
        </Card>)}
     {(open && doctorData) && <BookAppointment open={open} handleClose={handleClose} doctorData={doctorData} />}
      {(open1 && doctorDetails) && <DoctorDetails open1={open1} handleClose1={handleClose1} doctorDetails={doctorDetails} />}
    </div>
  )
}

export default DoctorList