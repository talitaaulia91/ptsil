import {React, useState} from 'react';
import { Container, Typography, Box } from '@mui/material';
import '../assets/css/index.css'
import TextForm from '../components/core/TextForm'
import Buttons from '../components/core/Button.jsx'
import Alerts from '../components/core/Alert.jsx'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login(params){
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [errAuth, setErrAuth] = useState(false);
    const navigate = useNavigate ();

    const handleSubmit = async (event) => {
      event.preventDefault();

        const data = new FormData(event.currentTarget);

        
        // const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        // axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

        // const config = {
        //     headers: {
        //         "Content-type": "application/json",
        //         'X-CSRF-TOKEN': csrfToken,
        //     },
        // };  


        await axios.post(`https://devapi.seinoindomobil.co.id:2002/test/auth`, {            
            username: data.get("username"),
            password : data.get("password")
        })
        .then((response) => {
            sessionStorage.setItem('token',JSON.stringify(response.data.result.signature.access));
            navigate("/dashboard");
            console.log(response.data);
        }, (error) => {
            setErrAuth(true);
        });
    }

    const handleClose = () => {
      setErrAuth(false);
    }



    return (
      <>
       <meta name="csrf-token" content="{{ csrf_token() }}"/>
        <Container maxWidth="sm">
          <Box className="box" 
          component="form"
          onSubmit={handleSubmit}
          >
            <Box className="card">
            <div className="title">Sign In</div>

            <TextForm 
            id="username"
            name="username"
            label="Username"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            autoFocus
            type="text"
            size="small"
        
            />

            <div style={{ display:"flex", width:"100%", position:"relative"}}>
            <TextForm 
            id="password"
            name="password"
            label="Password"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            autoFocus
            inputProps={{ minLength: 8 }}
            type={isShowPassword ? "text" : "password"}
            size="small"
            />
          <div style={{ position:"absolute", right:10, top:"40%", cursor:"pointer" }} onClick={()=>setIsShowPassword(!isShowPassword)}>
          {isShowPassword ? 
            <VisibilityOff fontSize="small"/>
          :
            <Visibility fontSize="small"/>
          }
          </div>
            </div>

            <Buttons
            variant="contained"
            label="Sign In"
            size="small"  
            type="submit"
            sx={{ 
                borderRadius:50
             }} 
            />

             <Alerts label="Username atau password salah!" open={errAuth} severity ="error"onClose={handleClose}/>
            </Box>
          </Box>
        </Container>
        </>
    )
}