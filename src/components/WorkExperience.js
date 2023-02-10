import React from 'react'
import { makeStyles } from 'tss-react/mui';
import { TextField, Button, FormControlLabel, Checkbox, Box, FormControl } from '@mui/material';
import { useForm } from 'react-hook-form';
import { collection, doc, addDoc } from 'firebase/firestore';
import firebaseEngine from '../initFirebase/configureFirebase';
import {MdCancel} from 'react-icons/md';
import { DataStoreState } from '../store/ContexApi';

const WorkExperience = ({closeExperience}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {setAlert} = DataStoreState();

  const { db } = firebaseEngine;
  const userId = JSON.parse(localStorage.getItem('user')).uid;
  const appData = collection(db, 'WorkExperience')

  const onSubmit = async (data) => {
    await addDoc(appData, { ...data, createdBy: doc(db, "User", userId) });
    setAlert({
      open: true,
      message: "Your work experience has been submitted successfully",
      type: "success"
    })
    closeExperience()
  }

  const useStyle = makeStyles()((theme) => ({
    form: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      position: "relative"
    },
    formDate: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between"
    },
    cancel: {
      position: "absolute",
      right: 0,
      top: 0,
      color: "#98a2b3",
      fontSize: 29,
      cursor: "pointer"
    },
    input: {
      marginBottom: "18px",
    },
    label: {
      fontFamily: "Work Sans",
      marginBottom: "8px",
      color: "#344054"
    },
    formTitle: {
      marginBottom: "20px"
    },
    textarea: {
      height: 100,
      marginBottom: 13,
      padding: "15px",
      fontSize: "inherit",
      fontFamily: "inherit",
    }
  }));

  const {classes} = useStyle();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <MdCancel className={classes.cancel} onClick={closeExperience}/>
      <h3 className={classes.formTitle}>Work Experience</h3>
      <Box className={classes.formDate}>
        <FormControl>
          <label className={classes.label}>From*</label>
          <TextField
            className={classes.input}
            id="date"
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
        </FormControl>
        <FormControl>
          <label className={classes.label}>To*</label>
          <TextField
          className={classes.input}
            id="date"
            type="date"
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          fullWidth
            {...register("endDate")}
            // error={!!errors?.endDate}
            // helperText={errors?.endDate ? errors.endDate.message : null} 
          />
        </FormControl>
      </Box>
      <FormControlLabel className={classes.input} {...register("currently")} control={<Checkbox />} label="I'm currently working here" sx={{ color: "grey", fontSize: "1px" }} />
      <label className={classes.label}>Title*</label>
      <TextField
      className={classes.input}
      variant='outlined'
      type="text"
      label="title"
      fullWidth
        {...register("title", { required: "Add Your Job title" })}
        error={!!errors?.title}
        helperText={errors?.title ? errors.title.message : null} 
      />
      <label className={classes.label}>Company*</label>
      <TextField
      className={classes.input}
      variant='outlined'
      type="text"
      label="company*"
      fullWidth
      {...register("company", { required: "Add Your company name" })}
      error={!!errors?.company}
      helperText={errors?.company ? errors.company.message : null}
      />
      <label className={classes.label}>Location*</label>
      <TextField
      className={classes.input}
      variant='outlined'
      label="location"
      type="text"
      fullWidth
        {...register("location")}
      />
      <label className={classes.label}>Description*</label>
      <textarea
        className={classes.textarea}
        col={60}
        row={20}
        {...register("description", { required: "Add the description" })}
        error={!!errors?.description}
        helperText={errors?.description ? errors.description.message : null}
      />
      <Button type="submit" variant='contained' sx={{backgroundColor: "#6941c6", padding: "16px 57px", width: "150px", alignSelf: "flex-end"}}>save</Button>
    </form>
  )
}

export default WorkExperience