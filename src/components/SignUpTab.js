import React, { useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import { TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import firebaseEngine from '../initFirebase/configureFirebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { DataStoreState } from '../store/ContexApi';

const SignUpTab = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()
  const [disable, setDisable] = useState(false);
  const { setAlert } = DataStoreState();
  const { auth } = firebaseEngine;
  
  const onSubmit = async (data) => {
    const { email, password } = data;
    setDisable(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
      const user = userCredentials.user
      setAlert({
        open: true,
        message: `You have successfully created a new account as ${user.email}`,
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
        setDisable(false);
    })
  }

  const useStyle = makeStyles()((theme) => ({
      form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      fontFamily: "Work Sans",
      gap: "10px"
    },
  }));

  const { classes } = useStyle();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <label className={classes.label}>email</label>
      <TextField
      className={classes.input}
      variant='outlined'
      type="email"
      label="email"
      fullWidth
      {...register("email", { required: "Add Your Email" })}
        error={!!errors?.email}
        helperText={errors?.email ? errors.email.message : null}
      />
      <label className={classes.label}>password</label>
      <TextField
      className={classes.input}
      variant='outlined'
      type="password"
      label="password"
      fullWidth
      {...register("password", { required: "Add Your password" })}
      error={!!errors?.password}
      helperText={errors?.password ? errors.password.message : null}
      />
      <label className={classes.label}>confirm Password</label>
      <TextField
      className={classes.input}
      variant='outlined'
      type="password"
      label="confirm password"
      fullWidth
      {...register("confirmPassword", { required: "Add Your password" })}
      error={!!errors?.confirmPassword}
      helperText={errors?.confirmPassword ? errors.confirmPassword.message : null}
      />
      <Button
        variant="contained"
        type="submit"
        size="large"
        disabled={disable}
        fullWidth
        sx={{bgcolor: "#6941C6", textTransform: "capitalize", fontFamily: "Work Sans"}}
      >
        sign up
      </Button>
    </form>
  )
}

export default SignUpTab