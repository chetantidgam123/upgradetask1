import React, { useState } from 'react'
import { Box, Button, Modal, FormControl, FormHelperText, Input, InputLabel, TextField, Select, MenuItem } from '@material-ui/core';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextFields, TextFieldsOutlined } from '@material-ui/icons';
import { TextareaAutosize } from '@mui/material';
import { timeSlot } from '../../util/fetch';
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
const BookAppointment = ({ open, handleClose }) => {
    const [value, setValue] = useState(dayjs(new Date()));
    const [formData, setFormData] = useState({
        doctorName: '',
        date: '',
        timeSlot: '',
        medicalHistory: '',
        symptoms: ''
    });
    

    const [errors, setErrors] = useState({
        medicalHistory: '',
        symptoms: '',
    });
    const setDate=(date)=>{
       let date1 = dayjs(date).format('DD/MM/YYYY')
       setFormData({...formData,date:date1})
        
    }
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: '',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        const newErrors = {};
        if(formData.timeSlot===''){
            newErrors.timeSlot = 'Select time slot'
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {

        }
    };
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="ApptopSection">
                        <p>Book an Appoitment</p>
                    </div>
                    <form onSubmit={handleSubmit} style={{ width: '90%', margin: 'auto', textAlign: 'left', padding:'20px' }}>
                        <FormControl variant="standard" style={{marginBottom:'10px'}}>
                            <InputLabel htmlFor="doctorName">Doctor Name *</InputLabel>
                            <Input
                                id="doctorName"
                                type="text"
                                name="doctorName"
                                value={formData.doctorName}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker', 'DatePicker']}>
                                <DatePicker
                                    label="Date"
                                    name = "date"
                                    value={value}
                                    onChange={(e)=>{setValue(e);setDate(e.$d)}}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                        <FormControl variant="standard" style={{ width: '200px', margin: 'auto',marginTop:'10px' }}  error={errors.timeSlot && formData.timeSlot==='' }>
                            <label htmlFor="">Select Time slot</label>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={formData.timeSlot}
                                name="timeSlot"
                                onChange={handleChange}
                            >
                                {
                                    timeSlot && timeSlot.length>0 && timeSlot.map((e,i)=>
                                        <MenuItem key={i} value={e}>{e}</MenuItem>
                                    )
                                }
                            </Select>
                            <FormHelperText id="my-helper-text">{errors.timeSlot}</FormHelperText>
                        </FormControl>
                        <div style={{marginTop:'10px'}}>
                            <label htmlFor="">Medical History</label><br />
                            <TextareaAutosize aria-label="minimum height" minRows={5} placeholder="" name="medicalHistory" value={formData.medicalHistory}   onChange={handleChange} className='textAreastandard' />
                        </div>
                        <div style={{marginTop:'10px'}}>
                            <label htmlFor="">Symptoms</label><br />
                            <TextareaAutosize aria-label="minimum height" minRows={5} placeholder="" name="symptoms" value={formData.symptoms}   onChange={handleChange} className='textAreastandard' />
                        </div>
                        <br />
                        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
                            Book Appointment
                        </Button>
                    </form>


                </Box>

            </Modal>
        </div>
    )
}

export default BookAppointment