import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
export default function RegistrationForm() {
  const [formdata, setFormData] = useState({
    username:'',
    password:'',
    email:''
  })

  const handleFormData = (e) =>{
     const {name, value} = e.target;
     setFormData(
      (prev)=>({...prev, [name]:value})
     )
  }

  console.log(formdata)
  
  const handleformSubmit = (e) =>{
     e.preventDefault();
     console.log("formdata",formdata)
  }
  return (
    <>
      <Box
        onSubmit={handleformSubmit}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          // border:'1px solid black',
          // boxShadow:'5px 5px 5px 1px  rgba(0,0,255,0.7)',
          width:'400px',
          margin:'10px',
          "& > :not(style)": { m: 1, width: "45ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <p>Registration Form</p>
        <TextField
          id="username"
          name="username"
          label="Usename"
          value={formdata.username}
          variant="standard"
          onChange={handleFormData}
        />
        <TextField
          id="password"
          name="password"
          label="Password"
          value={formdata.password}
          variant="standard"
          onChange={handleFormData}

        />
        <TextField 
        id="email"
        name="email"
        label="Email" 
        value={formdata.email}
        variant="standard"
        onChange={handleFormData}
         />
        <Button type="submit" variant="contained"  sx={{ width: '100%' }}>Submit</Button>
      </Box>
    </>
  );
}
