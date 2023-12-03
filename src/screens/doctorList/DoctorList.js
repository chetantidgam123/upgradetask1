import { Button, Card, CardActions, CardContent, FormControl, MenuItem, Select, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
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
    get_data('/doctors', {},{speciality:specality})
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
            {specialityList.map((e) => <MenuItem value={e}>{e}</MenuItem>)}
          </Select>
        </FormControl>
      </div>
      {doctorList.map((e) =>
        <Card style={{ width: '40%', margin: 'auto' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Doctor Name : Ocean Garner
            </Typography>
            <Typography sx={{ fontSize: 14 }} component="div">
              Speciality:PULMONOLOGIST
            </Typography>
            <Typography sx={{ mb: 1.5 }}>
              rating
            </Typography>
          </CardContent>
          <CardActions className='cardActions'>
            <Button variant="contained" color="primary" onClick={()=>{setDoctorData(e);handleOpen()}} >Book Appoitment</Button>
            <Button variant="contained" className='bookappBtn'>View Details</Button>
          </CardActions>
        </Card>)}
      <BookAppointment open={open}handleClose={handleClose} doctorData={doctorData} />
      <DoctorDetails open1={open1}handleClose={handleClose1} doctorDetails={doctorDetails}/>
    </div>
  )
}

export default DoctorList