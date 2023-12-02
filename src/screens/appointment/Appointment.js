import React, { useState } from 'react'
import { logData } from '../../util/fetch'
import { Button, Card, CardActions, CardContent, TextField, Typography } from '@material-ui/core';
import { Rating, TabContext } from '@material-ui/lab';
import { Box, Modal } from '@material-ui/core';

const Appointment = () => {
    const loggdata = logData();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [value, setValue] = useState('1');
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 350,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 0,
    };
  return (
      <div>
        {/*if login  */}
        {
            !loggdata && <div>
                <Card>
                    <CardContent>
                        <Typography variant="h6"  color="text.secondary" gutterBottom>
                        Dr. Hermione Kelley
                        </Typography>
                        <Typography sx={{ fontSize: 14 }}  component="div">
                        Date: 2023-12-10
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Symptoms: Cold
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        priorMedicalHistory: NA 
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary" onClick={handleOpen}>Rate Appoitment</Button>
                    </CardActions>
                </Card>
                <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <div className="topSection">
                            <p>Rate Appointment</p>
                        </div>
                        <TabContext>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Comments"
                                multiline
                                maxRows={4}
                                />
                                <Typography component="legend">Rating: 
                                <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                /></Typography>
                                <br/>
                            <Button variant="contained" color="primary">Rate Appoitment</Button>
                        </TabContext>
                    </Box>
                </Modal>
            </div>
        }
        {
            loggdata && <div>
                please login first
            </div>
        }

    </div>
  )
}

export default Appointment