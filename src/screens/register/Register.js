import React, { useState } from 'react';
import { regData, post_data } from '../../util/fetch';
import { Button, FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core';
import { errorAlerts, successAlerts } from '../../util/Alert';

const Register = ({ setValue }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    mobileNo: ''
  });

  const [errors, setErrors] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    mobileNo: ''
  });

  const register = (json) => {
    console.log(json);
    post_data('/users/register', json, {})
      .then((res) => {
        if (res.data.status) {
          setValue('1');
          successAlerts(res.data.message);
        } else {
          errorAlerts(res.data.message);
        }
      }).catch((e) => {
        console.log(e);
      })
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name==='mobileNo'){
      if(value.length>10){
        return;
      }
    }
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
    if (formData.firstname.trim() === '') {
      newErrors.firstname = 'Please fill out this feild.';
    }
    if (formData.lastname.trim() === '') {
      newErrors.lastname = 'Please fill out this feild.';
    }
    if (formData.email.trim() === '') {
      newErrors.email = 'Please fill out this feild.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Enter Valid email.';
      }
    }
    if (formData.password.trim() === '') {
      newErrors.password = 'Please fill out this feild.';
    }
    if (formData.mobileNo.trim() === '') {
      newErrors.mobileNo = 'Please fill out this feild.';
    } else {
      // const mobileNoRegex = /^\+91[789]\d{9}$/;
      //   if(!mobileNoRegex.test(formData.mobileNo.trim())){
      //     newErrors.mobileNo = 'Enter Valid mobile number.';
      //   }
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      register(formData);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ width: '90%', margin: 'auto', textAlign: 'center'}}>
        <FormControl fullWidth margin="normal" variant="standard" error={!!errors.firstname && formData.firstname.trim().length > 0}>
          <InputLabel htmlFor="email">First Name *</InputLabel>
          <Input
            id="firstname"
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
          {formData.firstname.trim().length > 0 && <FormHelperText id="my-helper-text">{errors.firstname}</FormHelperText>}
          {(formData.firstname.trim().length === 0 && errors.firstname) && <div className='requiredDiv'><small>{errors.firstname}</small></div>}
        </FormControl>
        <FormControl fullWidth margin="normal" variant="standard" error={!!errors.lastname && formData.lastname.trim().length > 0}>
          <InputLabel htmlFor="email">Last Name *</InputLabel>
          <Input
            id="lastname"
            type="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
          {formData.lastname.trim().length > 0 && <FormHelperText id="my-helper-text">{errors.lastname}</FormHelperText>}
          {(formData.lastname.trim().length === 0 && errors.lastname) && <div className='requiredDiv'><small>{errors.lastname}</small></div>}
        </FormControl>
        <FormControl fullWidth margin="normal" variant="standard" error={!!errors.email && formData.email.trim().length > 0}>
          <InputLabel htmlFor="email">Email Id *</InputLabel>
          <Input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formData.email.trim().length > 0 && <FormHelperText id="my-helper-text">{errors.email}</FormHelperText>}
          {(formData.email.trim().length === 0 && errors.email) && <div className='requiredDiv'><small>{errors.email}</small></div>}
        </FormControl>
        <FormControl fullWidth margin="normal" variant="standard" error={!!errors.password && formData.password.trim().length > 0}>
          <InputLabel htmlFor="email">Password *</InputLabel>
          <Input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {formData.password.trim().length > 0 && <FormHelperText id="my-helper-text">{errors.password}</FormHelperText>}
          {(formData.password.trim().length === 0 && errors.password) && <div className='requiredDiv'><small>{errors.password}</small></div>}
        </FormControl>
        <FormControl fullWidth margin="normal" variant="standard" error={!!errors.mobileNo && formData.mobileNo.trim().length > 0}>
          <InputLabel htmlFor="email">Mobile No *</InputLabel>
          <Input
            id="mobileNo"
            type="text"
            name="mobileNo"
            maxLength="10"
            value={formData.mobileNo}
            onChange={handleChange}
          />
          {formData.mobileNo.trim().length > 0 && <FormHelperText id="my-helper-text">{errors.mobileNo}</FormHelperText>}
          {(formData.mobileNo.trim().length === 0 && errors.mobileNo) && <div className='requiredDiv'><small>{errors.mobileNo}</small></div>}
        </FormControl>
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Register
        </Button>
      </form>
    </div>
  )
}

export default Register