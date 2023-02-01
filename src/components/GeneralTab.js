import React from 'react'
import { makeStyles } from 'tss-react/mui';
import { FormControl, InputLabel, TextField, Select, MenuItem, Button} from '@mui/material';
import { useForm } from 'react-hook-form';
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore'
import firebaseEngine from '../initFirebase/configureFirebase';
import { fontFamily } from '@mui/system';

const GeneralTab = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [location, setLocation] = React.useState('');
  const user = JSON.parse(localStorage.getItem('user'));
  const { db } = firebaseEngine;
  const userId = user.uid;


  const appData = collection(db, "General")
  const handleChange = (event) => {
    setLocation(event.target.value)
  }

  const onSubmit = async (data) => {
    await addDoc(appData, {...data, createdAt: serverTimestamp(), createdBy: doc(db, "User", userId)})
  }

  const useStyle = makeStyles()((theme) => ({
    form: {
      display: "flex",
      flexDirection: "column",
      width: "100%"
    },
    formTitle: {
      marginBottom: "33px"
    },
    label: {
      marginBottom: "8px",
      fontFamily: "Work Sans"
    },
    input: {
      marginBottom: 13
    }
  }));

  const {classes} = useStyle();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <h2 className={classes.formTitle}>General information</h2>
      <label className={classes.label}>Display name*</label>
      <TextField
      variant='outlined'
      type="text"
      label="Display name"
      fullWidth
      className={classes.input}
      {...register("name", { required: "Add Your name" })}
      error={!!errors?.name}
      helperText={errors?.username ? errors.name.message : null} 
      />
      <label className={classes.label}>Nationality*</label>
      <TextField
      variant='outlined'
      type="text"
      label="Nationality*"
      className={classes.input}
      fullWidth
        {...register("nationality", { required: "Add Your name" })}
        error={!!errors?.nationality}
        helperText={errors?.nationality ? errors.nationality.message : null} 
      />
      <label className={classes.label}>Role*</label>
      <TextField
      variant='outlined'
      type="text"
      label="Designer/Developer/Architect..."
      className={classes.input}
      fullWidth
      {...register("role", { required: "Add Your role" })}
      error={!!errors?.role}
      helperText={errors?.role ? errors.role.message : null}
      />
      <label className={classes.label}>Location*</label>
      <TextField
      variant='outlined'
      label="Location*"
      type="text"
      className={classes.input}
      fullWidth
      {...register("location", { required: "Add Your location" })}
      error={!!errors?.location}
      helperText={errors?.location ? errors.location.message : null}
      />
      <label className={classes.label}>Job Role*</label>
      <FormControl className={classes.input}>
        <InputLabel id="demo-simple-select-helper-label">Job Category*</InputLabel>
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
      <label className={classes.label}>About*</label>
      <TextField
      variant='outlined'
      type="text"
      label="About*"
      className={classes.input}
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