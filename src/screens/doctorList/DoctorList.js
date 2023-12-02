import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import React from 'react';

const DoctorList = () => {
  return (
    <div>
       <Card style={{width:'600px',margin:'auto'}}>
      <CardContent>
        <Typography variant="h6"  color="text.secondary" gutterBottom>
         Doctor Name : Ocean Garner
        </Typography>
        <Typography sx={{ fontSize: 14 }}  component="div">
          Speciality:PULMONOLOGIST
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          rating
        </Typography>
      </CardContent>
      <CardActions className='cardActions'>
        <Button variant="contained" color="primary" >Book Appoitment</Button>
        <Button variant="contained" className='bookappBtn'>View Details</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default DoctorList