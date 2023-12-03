import React, { useEffect, useState } from 'react'
import { post_login } from '../../util/fetch'
import { Button, TextField, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { Box, Modal } from '@material-ui/core';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 0,
};
const RateAppointment = ({open,handleClose,appData}) => {

    const [isRatingValid, setIsRatingValid] = useState(true);
    const [value, setValue] = useState(4);
    const [comment, setComment] = useState('');
    const handleChange = (e) => {
        const {  value } = e.target;
        setComment(value)
    };
    const rate_apoitment = () => {
        if(value===null || value<1){
            setIsRatingValid(false);
            return;
        }
        let json = {
                "appointmentId":appData.appointmentId,
                "doctorId":appData.doctorId,
                "rating":value,
                "comments":comment
        }
        post_login('/ratings/submit', json)
            .then((res) => {
                handleClose();
            })
            .catch(() => { })
    }

    useEffect(()=>{

    },[appData])
    return (
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
                <div className="topSection">
                    <p>Rate Appointment</p>
                </div>
                <div style={{ padding: '10px' }}>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Comments"
                        name='comment'
                        value={comment}
                        multiline
                        rows={4}
                        onChange={handleChange}
                    />
                    <Typography component="legend">Rating:
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                                setIsRatingValid(true);
                            }}
                        /></Typography>
                        {!isRatingValid && <small style={{color:'red',marginBottom:'5px'}}>Select a rating</small>}
                    <br />
                    <Button variant="contained" color="primary" onClick={rate_apoitment} >Rate Appointment</Button>
                </div>
            </Box>
        </Modal>
    )
}
export default RateAppointment