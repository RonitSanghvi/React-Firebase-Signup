import { onAuthStateChanged, signOut, updatePassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth  } from "../firebase";
import { Button, Typography, Input, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Dashboard() {

  const [authUser, setAuthUser] = useState(null);
  const [newPassword, setNewPassword] = useState(""); // New password state
  const navigate = useNavigate();  // To navigate  

  // Checks if user is logged in.
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  });

  
  // Signout button fucntionality
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/")
        toast.success("Signout Success")
      })
      .catch((error) => console.log(error));
  };

  // Change password functionality
  const handlePasswordUpdate = () => {
    if (!newPassword) {
      toast.error("Please Enter New Password")
      return;
    }

    updatePassword(authUser, newPassword)
      .then(() => {
        toast.success("Password Updated Successfully")
        setNewPassword(""); // Clear the new password field after successful update
      })
      .catch((error) => {
        console.log("Error updating password:", error.message);
      });
  };

  return (
    <Box className='Main-container'>
      {authUser ? (
        <Box className='Dashboard-card'>
          <Typography variant="h4" color='white' >{`Welcome, ${authUser.email}`}</Typography>

          <Box className='Password-change-box'>
            <Input
              className="Dashboard-input"
              disableUnderline
              required
              type="password"
              placeholder="Update Your Password"
              variant="standard"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              inputProps={{ style: { color: 'white' } }}
            /><br/><br/>

            <Button variant="contained" size="small" className="Dashboard-password-button" style={{marginBottom:20}} onClick={handlePasswordUpdate} >Change Password</Button>
          </Box>

          <Button className='Dashboard-button' variant="outlined" onClick={userSignOut}>Sign Out</Button>

        </Box>              
      ) : (
        <Typography variant='h2' color='white' className="Logout-text">Signed Out</Typography>
      )}
    </Box>
  );
};


