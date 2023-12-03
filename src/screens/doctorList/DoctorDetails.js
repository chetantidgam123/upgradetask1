import { Box, Modal } from '@material-ui/core';
import React from 'react'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 0,
};
const DoctorDetails = ({open1,handleClose1,DoctorDetails}) => {
  return (
    <div>
        <Modal
                open={open1}
                onClose={handleClose1}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='viewDoctor'>
                    <p>{DoctorDetails?.doctorName}</p>
                    <p>Total Experiance : {DoctorDetails?.doctorName}</p>
                    <p>Speciality :{DoctorDetails?.doctorName}</p>
                    <p>Date of Birth{DoctorDetails?.doctorName}</p>
                    <p>City:{DoctorDetails?.doctorName}</p>
                    <p>Email:{DoctorDetails?.doctorName}</p>
                    <p>Mobile:{DoctorDetails?.doctorName}</p>
                    <p>Rating:{DoctorDetails?.doctorName}</p>
                     </Box>

            </Modal>
    </div>
  )
}

export default DoctorDetails