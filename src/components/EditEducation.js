import React from 'react'
import { makeStyles } from 'tss-react/mui';
import { TextField, Button, Box, FormControl } from '@mui/material';
import { Textarea } from '@mui/joy';
import { useForm } from 'react-hook-form'
import firebaseEngine from '../initFirebase/configureFirebase';
import { doc, updateDoc, } from 'firebase/firestore';
import { MdCancel } from 'react-icons/md';
import { DataStoreState } from '../store/ContexApi';

const EditEducation = ({experienceData, closeEditEducation}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { db } = firebaseEngine;
  const { setAlert } = DataStoreState();

  const onSubmit = async (data) => {
    const educationDoc = doc(db, "Education", experienceData.id)
    const newFields = { fromDate: data.fromDate, endDate: data.endDate, degree: data.degree, school: data.school, description: data.description }
    await updateDoc(educationDoc, newFields)
    setAlert({
      open: true,
      message: "Your education has been edited successfully",
      type: "success"
    })
    closeEditEducation();
  }

  const useStyle = makeStyles()((theme) => ({
    form: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      position: "relative"
    },
    cancel: {
      position: "absolute",
      right: 0,
      top: 0,
      color: "#98a2b3",
      fontSize: 29,
      cursor: "pointer"
    },
    formDate: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between"
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
      <MdCancel className={classes.cancel} onClick={closeEditEducation}/>
      <h3 className={classes.formTitle}>Education</h3>
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
            defaultValue={experienceData.fromDate}
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
            defaultValue={experienceData.endDate}
            {...register("endDate", { required: "Add Your education end Date" })}
            error={!!errors?.endDate}
            helperText={errors?.endDate ? errors.endDate.message : null} 
          />
        </FormControl>
      </Box>
      <label className={classes.label}>Degree/Certification*</label>
      <TextField
      className={classes.input}
      variant='outlined'
      type="text"
      label="Degree/Certification*"
      fullWidth
      defaultValue={experienceData.degree}
        {...register("degree", { required: "Add Your Degree/certification" })}
        error={!!errors?.degree}
        helperText={errors?.degree ? errors.degree.message : null} 
      />
      <label className={classes.label}>school/University*</label>
      <TextField
      className={classes.input}
      variant='outlined'
      type="text"
      label="school/University*"
      fullWidth
      defaultValue={experienceData.school}
      {...register("school", { required: "Add Your school/Institution" })}
      error={!!errors?.school}
      helperText={errors?.school ? errors.school.message : null}
      />
      <label className={classes.label}>Description</label>
      <Textarea
        className={classes.textarea}
        minRow={20}
        defaultValue={experienceData.description}
        {...register("description", { required: "Add the description" })}
        error={!!errors?.description}
        helperText={errors?.description ? errors.description.message : null}
      />
      <Button type="submit" variant='contained' sx={{backgroundColor: "#6941c6", padding: "16px 57px", width: "150px", alignSelf: "flex-end"}}>save</Button>
    </form>
  )
}

export default EditEducation