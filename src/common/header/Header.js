import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from '../../assets/logo.jpeg'
import { Box, Button, Modal, Tab } from '@material-ui/core';
import { logData } from '../../util/fetch';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import Login from '../../screens/login/Login';
import Register from '../../screens/register/Register';
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
const Header = () => {
    const [islog, setIsLog] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [value, setValue] = useState('1');

    const logOut = () => {
        localStorage.removeItem('token');
        localStorage.clear();
        let logdata = logData();
        if (logdata) {
            setIsLog(true);
        } else {
            setIsLog(false);
        }
    }


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {

    }, [islog])
    return (
        <div className="header">
            <div className='leftContent'>
                <img src={logo} alt="Logo" className="logo" />
                <h2 className='headerBrand'>Doctor Finder</h2>
            </div>
            <div>
                {!islog && <Button variant="contained" color="primary" onClick={handleOpen}>Login</Button>}
                {islog && <Button variant="contained" color="secondary" onClick={logOut}>Logout</Button>}
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="topSection">
                        <p>Authentication</p>
                    </div>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList className='tabs' onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Login" value="1" />
                                <Tab label="Register" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1"><Login open={open} setIsLog={setIsLog} handleClose={handleClose} /></TabPanel>
                        <TabPanel value="2" style={{ maxHeight: '450px', overFlowY: 'auto' }}><Register /></TabPanel>
                    </TabContext>
                </Box>

            </Modal>
        </div >
    );
};

export default Header;