import React from 'react'
import { makeStyles } from 'tss-react/mui';
import { FormControl, InputLabel, TextField, Select, MenuItem, Button} from '@mui/material';
import { useForm } from 'react-hook-form'

const GeneralTab = () => {
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
      type="text"
        label="Display name"
        sx={{width: "400px"}}
      fullWidth
        {...register("name", { required: "Add Your name" })}
        error={!!errors?.name}
        helperText={errors?.username ? errors.name.message : null} 
      />
      <TextField
      variant='outlined'
      type="text"
        label="Nationality*"
        sx={{width: "400px"}}
      fullWidth
        {...register("nationality", { required: "Add Your name" })}
        error={!!errors?.nationality}
        helperText={errors?.nationality ? errors.nationality.message : null} 
      />
      <TextField
      variant='outlined'
      type="text"
      label="Designer / Developer / Architect ..."
      fullWidth
      {...register("role", { required: "Add Your role" })}
      error={!!errors?.role}
      helperText={errors?.role ? errors.role.message : null}
      />
      <TextField
        variant='outlined'
        label="Location*"
      type="text"
      fullWidth
      {...register("location", { required: "Add Your location" })}
      error={!!errors?.location}
      helperText={errors?.location ? errors.location.message : null}
      />
      <FormControl>
        <InputLabel id="demo-simple-select-helper-label">Role*</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={location}
          label="location"
          onChange={handleChange}
          >
            <MenuItem value={10}>Software Engineer</MenuItem>
            <MenuItem value={20}>Accountant</MenuItem>
            <MenuItem value={30}>Product Management</MenuItem>
            <MenuItem value={30}>UI/UX Designer</MenuItem>
          </Select>
      </FormControl>
      <TextField
      variant='outlined'
      type="text"
      label="About*"
      sx={{width: "400px"}}
      fullWidth
        {...register("about", { required: "Add Your about" })}
        error={!!errors?.about}
        helperText={errors?.userabout ? errors.name.message : null} 
      />
      <Button type="submit" variant='contained' sx={{backgroundColor: "#6941c6", padding: "16px 57px", width: "150px", alignSelf: "flex-end"}}>Done</Button>
    </form>
  )
}

export default GeneralTab