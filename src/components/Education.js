import React from 'react'
import { makeStyles } from 'tss-react/mui';
import { TextField, Button, Box, FormControl} from '@mui/material';
import { useForm } from 'react-hook-form'
import firebaseEngine from '../initFirebase/configureFirebase';
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore';
import { MdCancel } from 'react-icons/md';
import { DataStoreState } from '../store/ContexApi';

const Education = ({closeEducation}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const userId = JSON.parse(localStorage.getItem("user")).uid;
  const { db } = firebaseEngine;
  const { setAlert } = DataStoreState();


  const appData = collection(db, "Education");

  const onSubmit = async (data) => {
    await addDoc(appData, { ...data, createdBy: doc(db, "User", userId), createdAt: serverTimestamp() })
    setAlert({
      open: true,
      message: "Your education has been submitted successfully",
      type: "success"
    })
    closeEducation();
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
    }
  }));

  const {classes} = useStyle();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <MdCancel className={classes.cancel} onClick={closeEducation}/>
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
      {...register("school", { required: "Add Your school/Institution" })}
      error={!!errors?.school}
      helperText={errors?.school ? errors.school.message : null}
      />
      <label className={classes.label}>Description*</label>
      <TextField
      className={classes.input}
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