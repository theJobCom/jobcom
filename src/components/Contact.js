import React from 'react'
import { makeStyles } from 'tss-react/mui';
import { TextField, Button} from '@mui/material';
import { useForm } from 'react-hook-form'
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore';
import firebaseEngine from '../initFirebase/configureFirebase';
import { DataStoreState } from '../store/ContexApi';
import { MdCancel } from 'react-icons/md';

const Contact = ({closeContact}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setAlert, user } = DataStoreState();
  const { db } = firebaseEngine;
  const userId = user?.uid;
  const appData = collection(db, "Contact");


  const onSubmit = async (data) => {
    await addDoc(appData, { ...data, createdBy: doc(db, "User", userId), createdAt: serverTimestamp() })
    setAlert({
      open: true,
      message: "Your contact info has been submitted successfully",
      type: "success"
    })
    closeContact();
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
      <MdCancel className={classes.cancel} onClick={closeContact}/>
      <h3 className={classes.formTitle}>Contact</h3>
      <label className={classes.label}>Email address*</label>
      <TextField
      className={classes.input}
      variant='outlined'
      type="email"
      label="Email address*"
      fullWidth
        {...register("email", { required: "Add Your email" })}
        error={!!errors?.email}
        helperText={errors?.email ? errors.email.message : null} 
      />
      <label className={classes.label}>LinkedIn</label>
      <TextField
      className={classes.input}
      variant='outlined'
      type="url"
        label="LinkedIn"
      fullWidth
        {...register("linkedIn", { required: "Add Your LinkedIn" })}
        error={!!errors?.linkedin}
        helperText={errors?.linkedin ? errors.linkedin.message : null} 
      />
      <label className={classes.label}>GitHub</label>
      <TextField
      className={classes.input}
      variant='outlined'
      type="url"
      label="GitHub"
      fullWidth
      {...register("role")}
      />
      <label className={classes.label}>Behance</label>
      <TextField
      className={classes.input}
        variant='outlined'
        label="Behance"
      type="url"
      fullWidth
      {...register("behance")}
      />
      <label className={classes.label}>Twitter</label>
      <TextField
      className={classes.input}
      variant='outlined'
      type="url"
      label="Twitter"
      fullWidth
      {...register("twitter")}
      />
      <label className={classes.label}>Portfolio</label>
      <TextField
      className={classes.input}
      variant='outlined'
      type="url"
      label="portfolio"
      fullWidth
      {...register("portfolio")}
      />
      <Button type="submit" variant='contained' sx={{backgroundColor: "#6941c6", padding: "16px 57px", width: "150px", alignSelf: "flex-end"}}>Done</Button>
    </form>
  )
}

export default Contact