import React, { useEffect, useState } from 'react';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import { Box,Tab} from '@material-ui/core';
import DoctorList from '../doctorList/DoctorList';
import Appointment from '../appointment/Appointment';
const Home = () => {
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      useEffect(()=>{

      },[value])
    
    return (

        <div>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList className='hometabs' onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="DOCTORS" value="1"/>
                        <Tab label="APPOINTMENT" value="2"/>
                    </TabList>
                </Box>
                <TabPanel value="1"><DoctorList/></TabPanel>
                <TabPanel value="2"><Appointment valuetab={value} /></TabPanel>
            </TabContext>
        </div>
    )
}

export default Home