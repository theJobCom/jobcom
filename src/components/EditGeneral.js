import React from 'react'
import { makeStyles } from 'tss-react/mui';
import { FormControl, InputLabel, TextField, Select, MenuItem, Button} from '@mui/material';
import { useForm } from 'react-hook-form';
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore'
import firebaseEngine from '../initFirebase/configureFirebase';
import { DataStoreState } from '../store/ContexApi';
import { MdCancel } from 'react-icons/md';

const EditGeneral = ({closeEditGeneral, generalInfo}) => {
const { register, handleSubmit, formState: { errors } } = useForm();
  const [category, setCategory] = React.useState('');
  // const user = JSON.parse(localStorage.getItem('user'));
  const { db } = firebaseEngine;
  const { setAlert, user } = DataStoreState();
  const userId = user?.uid;


  const appData = collection(db, "General")
  const handleChange = (event) => {
    setCategory(event.target.value)
  }

  const onSubmit = async (data) => {
    await addDoc(appData, { ...data, createdAt: serverTimestamp(), createdBy: doc(db, "User", userId) })
    setAlert({
      open: true,
      message: "Your general information has been submitted successfully",
      type: "success"
    })
    closeEditGeneral()
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
    formTitle: {
      marginBottom: "33px"
    },
    label: {
      marginBottom: "8px",
      fontFamily: "Work Sans",
      color: "#344054"
    },
    input: {
      marginBottom: 13
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
      <MdCancel className={classes.cancel} onClick={closeEditGeneral}/>
      <h2 className={classes.formTitle}>Edit General information</h2>
      <label className={classes.label}>Display name*</label>
      <TextField
      variant='outlined'
      type="text"
      label="Display name"
      defaultValue={generalInfo.name}
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
      defaultValue={generalInfo.nationality}
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
      defaultValue={generalInfo.role}
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
      defaultValue={generalInfo.location}
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
          value={category}
          {...register("category")}
          label="Select Job Category"
          onChange={handleChange}
          defaultValue={generalInfo.category}
        >
          <MenuItem value={"SoftWare Development"}>SoftWare Development</MenuItem>
          <MenuItem value={"Finance"}>Finance</MenuItem>
          <MenuItem value={"Education"}>Education</MenuItem>
          <MenuItem value={"Agriculture"}>Agriculture</MenuItem>
        </Select>
      </FormControl>
      <label className={classes.label}>About*</label>
      <textarea
        col={60}
        row={20}
        className={classes.textarea}
        defaultValue={generalInfo.about}
        {...register("about", { required: "Add Your about" })}
        error={!!errors?.about}
        helperText={errors?.userabout ? errors.name.message : null} 
      />
      <Button type="submit" variant='contained' sx={{backgroundColor: "#6941c6", padding: "16px 57px", width: "150px", alignSelf: "flex-end"}}>Done</Button>
    </form>
  )
}

export default EditGeneral