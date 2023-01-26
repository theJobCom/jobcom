import React from 'react'
import { makeStyles } from 'tss-react/mui';
import { TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import firebaseEngine from '../initFirebase/configureFirebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


const LoginTab = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { auth } = firebaseEngine;
  
  
  const onSubmit = async (data) => {
    const { email, password } = data;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user
        console.log(user);
        navigate('/profilepage')
      })
      .catch((error) => {
        console.log(error);
    })
  }

  const useStyle = makeStyles()((theme) => ({
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }
  }));

  const {classes} = useStyle();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <TextField
      variant='outlined'
      type="email"
      label="email"
      fullWidth
        {...register("email", { required: "Add Your email" })}
        error={!!errors?.email}
        helperText={errors?.email ? errors.email.message : null} 
      />
      <TextField
      variant='outlined'
      type="password"
      label="password"
      fullWidth
      {...register("password", { required: "Add Your password" })}
      error={!!errors?.password}
      helperText={errors?.password ? errors.password.message : null}
      />
      <Button
        variant="contained"
        type="submit"
        size="large"
        sx={{bgcolor: "#6941C6", textTransform: "capitalize", fontFamily: "Work Sans"}}
      >
        Login
      </Button>
    </form>
  )
}

export default LoginTab