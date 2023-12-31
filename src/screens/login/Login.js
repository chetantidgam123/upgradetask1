import React, {useState } from 'react';
import { logData, login_post_data } from '../../util/fetch';
import { Button, FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core';
const Login = ({open,setIsLog,handleClose}) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
      });
    
      const [errors, setErrors] = useState({
        username: '',
        password: '',
      });
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
        const newErrors = {};
        if (formData.username.trim() === '') {
          newErrors.username = 'Please fill out this field.';
        }else{
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailRegex.test(formData.username.trim())){
                newErrors.username = 'Enter Valid email.';
            }
        }
        if (formData.password.trim() === '') {
          newErrors.password = 'Please fill out this field.';
        }
    
        if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
        } else {
         login(formData);
        }
      };

    const login = (json) => {
      login_post_data('/auth/login', json)
            .then((res) => {
                if (res.data.accessToken) {
                  let email = res.data.emailAddress;
                  let token = res.data.accessToken;
                  let firstName = res.data.firstName;
                    localStorage.setItem('token', token);
                    localStorage.setItem('emailId', email);
                    localStorage.setItem('firstName', firstName);
                    let logdata = logData();
                    if (logdata) {
                        setIsLog(true);
                        handleClose()
                      alert('Login Successful');
                    } else {
                        
                        setIsLog(false);
                      }
                    } else {
                      
                    }
                  }).catch((e) => {
                    alert(e.response.data.message);
                // console.log(e);
            })
    }
    
    
  return (
    <div>
         <form onSubmit={handleSubmit} style={{width:'90%',margin:'auto',textAlign:'center'}}>
         <FormControl fullWidth margin="normal"  variant="standard" error={!!errors.username && formData.username.trim().length>0 }>
          <InputLabel htmlFor="email">Email *</InputLabel>
          <Input
            id="email"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {formData.username.trim().length>0 &&<FormHelperText id="my-helper-text">{errors.username}</FormHelperText>}
          {(formData.username.trim().length===0 && errors.username) && <div className='requiredDiv'><small>{errors.username}</small></div>}
        </FormControl>
         <FormControl fullWidth margin="normal"  variant="standard" error={!!errors.password && formData.password.trim().length>0 }>
          <InputLabel htmlFor="email">Password *</InputLabel>
          <Input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {formData.password.trim().length>0 &&<FormHelperText id="my-helper-text">{errors.password}</FormHelperText>}
          {(formData.password.trim().length===0 && errors.password) && <div className='requiredDiv'><small>{errors.password}</small></div>}
        </FormControl>
            <Button type="submit" variant="contained" color="primary"  style={{ marginTop: '20px' }}>
              Login
            </Button>
          </form>
    </div>
  )
}

export default Login