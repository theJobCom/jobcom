import React from 'react'
import { makeStyles } from 'tss-react/mui';
import { FormControl, InputLabel, TextField, Select, MenuItem, Button} from '@mui/material';
import { useForm } from 'react-hook-form'

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [location, setLocation] = React.useState('');

  const handleChange = (event) => {
    setLocation(event.target.value)
  }

  const onSubmit = async (data) => {
    console.log(data)
  }

  const useStyle = makeStyles()((theme) => ({
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "30px",
      marginTop: "88px",
      width: "100%"
    }
  }));

  const {classes} = useStyle();
  return (
<form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <TextField
      variant='outlined'
      type="email"
      label="Email address*"
      sx={{width: "400px"}}
      fullWidth
        {...register("email", { required: "Add Your email" })}
        error={!!errors?.email}
        helperText={errors?.email ? errors.email.message : null} 
      />
      <TextField
      variant='outlined'
      type="url"
        label="LinkedIn"
        sx={{width: "400px"}}
      fullWidth
        {...register("linkedIn", { required: "Add Your LinkedIn" })}
        error={!!errors?.linkedin}
        helperText={errors?.linkedin ? errors.linkedin.message : null} 
      />
      <TextField
      variant='outlined'
      type="url"
      label="GitHub"
      fullWidth
      {...register("role")}
      />
      <TextField
        variant='outlined'
        label="Behance"
      type="url"
      fullWidth
      {...register("behance")}
      />
      <TextField
      variant='outlined'
      type="url"
      label="Twitter"
      sx={{width: "400px"}}
      fullWidth
      {...register("twitter")}
      />
      <TextField
      variant='outlined'
      type="url"
      label="portfolio"
      sx={{width: "400px"}}
      fullWidth
      {...register("portfolio")}
      />
      <Button type="submit" variant='contained' sx={{backgroundColor: "#6941c6", padding: "16px 57px", width: "150px", alignSelf: "flex-end"}}>Done</Button>
    </form>
  )
}

export default Contact