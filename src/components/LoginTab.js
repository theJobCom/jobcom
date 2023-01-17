import React from 'react'
import { makeStyles } from 'tss-react/mui';
import { TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form'


const LoginTab = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
      variant='outlined'
      type="text"
      label="username"
      fullWidth
        {...register("username", { required: "Add Your Username" })}
        error={!!errors?.username}
        helperText={errors?.username ? errors.username.message : null} 
      />
      <TextField
      variant='outlined'
      type="email"
      label="email"
      fullWidth
      {...register("email", { required: "Add Your Email" })}
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
      >
        Login
      </Button>
    </form>
  )
}

export default LoginTab