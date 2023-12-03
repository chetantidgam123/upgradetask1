import React, { useEffect, useState } from 'react'
import { get_data, logData } from '../../util/fetch'
import { Button, Card, CardActions, CardContent, TextField, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { Box, Modal } from '@material-ui/core';

const Appointment = () => {
    const loggdata = logData();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [value, setValue] = useState(4);
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
    const [appitmentList, setAppitmentList] = useState([{}]);
    const getuserappointment = () => {
        get_data(`/users/${loggdata.email}/appointments`, {}, {})
            .then((res) => {

            }).catch(() => {

            })
    }
    useEffect(() => {
        if (loggdata) {
            getuserappointment()
        }
    }, [])
    return (
        <div>
            {/*if login  */}
            {
                loggdata && <div>
                    {appitmentList && appitmentList.map((e,i) =>
                        <Card key={i}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Dr. Hermione Kelley
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} component="div">
                                    Date: 2023-12-10
                                </Typography>
                                <Typography sx={{ mb: 1.5 }}>
                                    Symptoms: Cold
                                </Typography>
                                <Typography sx={{ mb: 1.5 }}>
                                    priorMedicalHistory: NA
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" color="primary" onClick={handleOpen}>Rate Appoitment</Button>
                            </CardActions>
                        </Card>)}
                    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                        <Box sx={style}>
                            <div className="topSection">
                                <p>Rate Appointment</p>
                            </div>
                         <div style={{padding:'10px'}}> 
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
                         </div>
                        </Box>
                    </Modal>
                </div>
            }
            {
                !loggdata && <div>
                    please login first
                </div>
            }

        </div>
    )
}

export default Appointment