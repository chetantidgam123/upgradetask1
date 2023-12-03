import React, { useEffect, useState } from 'react'
import { get_login, logData } from '../../util/fetch'
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import RateAppointment from './RateAppointment'

const Appointment = ({ valuetab }) => {
    const loggdata = logData();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [appData, setAppData] = useState();

    const [appitmentList, setAppitmentList] = useState([]);
    const getuserappointment = () => {
        get_login('/users/' + loggdata?.emailId + '/appointments')
            .then((res) => {
                setAppitmentList(res.data)
            }).catch(() => {

            })
    }
    useEffect(() => {
        if (loggdata) {
            getuserappointment()
        }else{

        }
    }, [valuetab])
    return (
        <div>
            {/*if login  */}
            {
                logData().token && <div>
                    {appitmentList && appitmentList.map((e, i) =>
                        <Card key={i} style={{ marginBottom: '10px' }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Dr.{e.doctorName}
                                </Typography>
                                <Typography sx={{ fontSize: 14 }} component="div">
                                    Date: {e.appointmentDate}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }}>
                                    Symptoms: {e.symptoms}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }}>
                                    priorMedicalHistory:{e.priorMedicalHistory === '' ? 'NA' : e.priorMedicalHistory}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" color="primary" onClick={() => { setAppData(e); handleOpen() }}>Rate Appointment</Button>
                            </CardActions>
                        </Card>)}
                    {appitmentList && appitmentList.length === 0 && <div style={{textAlign:'center'}}>No data found</div>}
                    {(open && appData) && <RateAppointment open={open} handleClose={handleClose} appData={appData} />}
                </div>
            }
            {
                !logData().token && <div style={{textAlign:'center'}}>
                    <strong>Login to see the appointments</strong>
                </div>
            }

        </div>
    )
}

export default Appointment