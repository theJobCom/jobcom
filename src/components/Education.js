import React from 'react'
import { makeStyles } from 'tss-react/mui';
import { FormControl, InputLabel, TextField, Select, MenuItem, Button} from '@mui/material';
import { useForm } from 'react-hook-form'

const Education = () => {
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
        id="date"
        label="From*"
        type="date"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      fullWidth
        {...register("fromDate", { required: "Add Your education start Date" })}
        error={!!errors?.fromDate}
        helperText={errors?.fromDate ? errors.fromDate.message : null} 
      />
      <TextField
        id="date"
        label="to*"
        type="date"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      fullWidth
        {...register("endDate", { required: "Add Your education end Date" })}
        error={!!errors?.endDate}
        helperText={errors?.endDate ? errors.endDate.message : null} 
      />
      <TextField
      variant='outlined'
      type="text"
      label="Degree/Certification*"
      sx={{width: "400px"}}
      fullWidth
        {...register("degree", { required: "Add Your Degree/certification" })}
        error={!!errors?.degree}
        helperText={errors?.degree ? errors.degree.message : null} 
      />
      <TextField
      variant='outlined'
      type="text"
      label="school/University*"
      fullWidth
      {...register("school", { required: "Add Your school/Institution" })}
      error={!!errors?.school}
      helperText={errors?.school ? errors.school.message : null}
      />
      <TextField
      variant='outlined'
      label="Description"
      type="text"
      fullWidth
      {...register("description")}
      />
      <Button type="submit" variant='contained' sx={{backgroundColor: "#6941c6", padding: "16px 57px", width: "150px", alignSelf: "flex-end"}}>save</Button>
    </form>
  )
}

export default Education