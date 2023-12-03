import { Box, Modal,Typography } from '@material-ui/core';
import React, { useEffect } from 'react'
import { Rating } from '@material-ui/lab';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '20%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 0,
};
const DoctorDetails = ({ open1, handleClose1, doctorDetails }) => {

  useEffect(() => {
   
  }, [doctorDetails])
  return (
    <div>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='viewDoctor'>
          <div className="ApptopSection">
            <p>Doctor Details</p>
          </div>
          <h3 style={{marginBottom:'0px'}}>Dr. {doctorDetails?.firstName + " " + doctorDetails.lastName}</h3>
          <p>Total Experiance : {doctorDetails?.totalYearsOfExp} years</p>
          <p>Speciality : {doctorDetails?.speciality}</p>
          <p>Date of Birth : {doctorDetails?.dob}</p>
          <p>City : {doctorDetails?.address.city}</p>
          <p>Email : {doctorDetails?.emailId}</p>
          <p>Mobile : {doctorDetails?.mobile}</p>
          <Typography sx={{ mb: 1.5 }} component="legend">Rating :
            <Rating
              name="simple-controlled"
              value={doctorDetails.rating}
              readOnly
            /></Typography>
            <br></br>
        </Box>

      </Modal>
    </div>
  )
}

export default DoctorDetails