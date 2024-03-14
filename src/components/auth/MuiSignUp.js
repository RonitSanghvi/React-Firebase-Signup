import React, {useState} from 'react';
import { Typography, Input, Stack, Link, Button, Box} from '@mui/material';
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Mui() {

  const navigate = useNavigate();

  // useState hooks to save email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // When user press SignUP button.
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        toast.success("Account Created")
        setEmail('')
        setPassword('')
        navigate('/login')
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message)
      });
  };

  const handleGoogle = () => {
    signInWithPopup(auth, provider).then((data)=>{
      setEmail(data.user.email)
      toast.success("Sign In with Google Success")
      navigate('/dashboard')
    })
  }

  return (
    <Box className='Main-container'>
      <form onSubmit={signUp}>
        <Box className='Card'>
          <Typography variant="p" className='Main-text'>
            Signup
          </Typography>
          
          <Stack direction="row" spacing={2} >
            <Input 
              className='Name-input'
              type="text"
              placeholder='First Name'
              disableUnderline />
            <Input 
              className='Name-input'
              type="text"
              placeholder='Last Name'
              disableUnderline />          
          </Stack>
          
            <Stack spacing={1} direction="row" className='Input-line'>
              <img alt="Img not found" src="https://purecodestorageprod.blob.core.windows.net/images-svg/Signin1_fa15f5a5-1750-483b-adbd-3a39c10858e6.svg" width="25px" height="25px" />
              <Input
                className='Input'
                placeholder='Email'
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disableUnderline />
            </Stack>


            <Stack spacing={1} direction="row" className='Input-line'>
              <img alt="Img not found" src="https://purecodestorageprod.blob.core.windows.net/images-svg/Signin1_3f4e1036-748c-4f7c-b288-021186172a29.svg" width="20px" height="20px" />
              <Input 
                className='Input'
                type="text"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disableUnderline />
            </Stack>
          
          <Button disableElevation variant="contained" type='submit' className='Button'>
            SignUp
          </Button>

          <Typography variant='p' color='white'>
            ------------------- OR -------------------
          </Typography>

          <Button variant= 'outlined' className='Google-button' onClick={handleGoogle}>
              <img 
                alt="Img not found" 
                src="https://purecodestorageprod.blob.core.windows.net/images-svg/Signin_549cd131-671d-4613-ab2d-429124d8492d.svg" 
                width="20px" 
                height="20px" 
                style={{marginRight: 10}} 
              />
              Sign In with Google
          </Button>

          <Stack spacing={1} direction="row">
            <Typography variant="p" color='gray'>
              Already have an account?
            </Typography>
            <Link onClick={()=> navigate('/login')} className='Link-text'>
              LogIn
            </Link>
          </Stack>
        </Box>
      </form>
    </Box>
  );
}
