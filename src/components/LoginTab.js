import React from 'react'
import { makeStyles } from 'tss-react/mui';
import { TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import firebaseEngine from '../initFirebase/configureFirebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { DataStoreState } from '../store/ContexApi';


const LoginTab = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setAlert } = DataStoreState();
  const navigate = useNavigate();
  const { auth } = firebaseEngine;
  
  
  const onSubmit = async (data) => {
    const { email, password } = data;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user
        console.log(user);
        setAlert({
          open: true,
          message: `You have successfully logged in as ${user.displayName}`,
          type: "success"
        })
        navigate('/profilepage')
      })
      .catch((error) => {
        setAlert({
          open: true,
          message: `${error.message}`,
          type: "error"
        })
    })
  }

  const useStyle = makeStyles()((theme) => ({
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      fontFamily: "Work Sans",
      gap: "10px"
    }
  }));

  const {classes} = useStyle();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <label>Email</label>
      <TextField
      variant='outlined'
      type="email"
      fullWidth
        {...register("email", { required: "Add Your email" })}
        error={!!errors?.email}
        helperText={errors?.email ? errors.email.message : null} 
      />
      <label>Password</label>
      <TextField
      variant='outlined'
      type="password"
      fullWidth
      {...register("password", { required: "Add Your password" })}
      error={!!errors?.password}
      helperText={errors?.password ? errors.password.message : null}
      />
      <Button
        variant="contained"
        type="submit"
        size="large"
        fullWidth
        sx={{bgcolor: "#6941C6", textTransform: "capitalize", fontFamily: "Work Sans"}}
      >
        Login
      </Button>
    </form>
  )
}

export default LoginTab