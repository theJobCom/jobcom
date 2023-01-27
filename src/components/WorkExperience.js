import React from 'react'
import { makeStyles } from 'tss-react/mui';
import { TextField, Button, FormControlLabel, Checkbox, FormGroup, FormControl, InputLabel} from '@mui/material';
import { useForm } from 'react-hook-form';
import { collection, doc, addDoc } from 'firebase/firestore';
import firebaseEngine from '../initFirebase/configureFirebase';

const WorkExperience = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const { db } = firebaseEngine;
  const userId = JSON.parse(localStorage.getItem('user')).uid;
  const appData = collection(db, 'UserData')

  const onSubmit = async (data) => {
    await addDoc(appData, { ...data, createdBy: doc(db, "User", userId) });
  }

  const useStyle = makeStyles()((theme) => ({
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "30px",
      marginTop: "88px",
      width: "100%"
    },
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
      <FormControlLabel {...register("currently")} control={<Checkbox />} label="I'm currently working here" sx={{color: "grey", fontSize:"1px"}} />
      <TextField
      variant='outlined'
      type="text"
      label="title"
      sx={{width: "400px"}}
      fullWidth
        {...register("title", { required: "Add Your Job title" })}
        error={!!errors?.title}
        helperText={errors?.title ? errors.title.message : null} 
      />
      <TextField
      variant='outlined'
      type="text"
      label="company*"
      fullWidth
      {...register("company", { required: "Add Your company name" })}
      error={!!errors?.company}
      helperText={errors?.company ? errors.company.message : null}
      />
      <TextField
      variant='outlined'
      label="location"
      type="text"
      fullWidth
        {...register("location")}
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

export default WorkExperience