import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './Header.css';
import logo from '../../assets/logo.jpeg'
import { Box, Button, Modal, Tab } from '@material-ui/core';
import { logData } from '../../util/fetch';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import Login from '../../screens/login/Login';
import Register from '../../screens/register/Register';
import {post_login} from '../../util/fetch'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 0,
};
const Header = () => {
    const logdata = logData()
    const [islog, setIsLog] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [value, setValue] = useState('1');
    const navigate =useNavigate()
    const logOut = () => {
        post_login('/auth/logout',{})
        .then((res)=>{
            localStorage.removeItem('token');
            localStorage.clear();
                setIsLog(false);
               window.location.reload();

        }).catch(()=>{

        })
    }


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        if(logdata.token){
            setIsLog(true);
        }else{
            setIsLog(false);
        }
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
                        <TabPanel value="2" style={{ maxHeight: '450px',overflowY:'auto' }}><Register setValue={setValue} /></TabPanel>
                    </TabContext>
                </Box>

            </Modal>
        </div >
    );
};

export default Header;