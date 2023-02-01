import React from 'react'
import { makeStyles } from 'tss-react/mui';
import { FormControl, InputLabel, TextField, Select, MenuItem, Button} from '@mui/material';
import { useForm } from 'react-hook-form';
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore';
import firebaseEngine from '../initFirebase/configureFirebase';

const Achievement = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [year, setYear] = React.useState('');
  const { db } = firebaseEngine;
  const userId = JSON.parse(localStorage.getItem('user')).uid;
  const appData = collection(db, "Achievements")

  const handleChangeYear = (event) => {
    setYear(event.target.value);
  }

  const onSubmit = async (data) => {
    await addDoc(appData, { ...data, createdAt: serverTimestamp(), createdBy: doc(db, "User", userId) });
  }

  const useStyle = makeStyles()((theme) => ({
    form: {
      display: "flex",
      flexDirection: "column",
      width: "100%"
    },
    input: {
      marginBottom: "18px",
    },
    label: {
      fontFamily: "Work Sans",
      marginBottom: "8px",
    },
    formTitle: {
      marginBottom: "20px"
    }
  }));

  const { classes } = useStyle();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <h3 className={classes.formTitle}>Achievement</h3>
      <label className={classes.label}>Achievement Title*</label>
      <TextField
      className={classes.input}
        variant='outlined'
        type="text"
        label="Achievement Title"
        fullWidth
        {...register("projectName", { required: "Add the Project name" })}
        error={!!errors?.projectName}
        helperText={errors?.userprojectName ? errors.projectName.message : null}
      />
      <label className={classes.label}>Select year*</label>
      <FormControl className={classes.input}>
        <InputLabel className={classes.input} id="demo-simple-select-helper-label">Select year*</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={year}
          {...register("achievementYear")}
          label="Select Year"
          onChange={handleChangeYear}
          >
          <MenuItem value={"2023"}>2023</MenuItem>
          <MenuItem value={"2022"}>2022</MenuItem>
          <MenuItem value={"2021"}>2021</MenuItem>
          <MenuItem value={"2020"}>2020</MenuItem>
        </Select>
      </FormControl>
      <label className={classes.label}>Presented By*</label>
      <TextField
      className={classes.input}
        variant='outlined'
        type="text"
        label="Presented by"
        fullWidth
        {...register("presentedBy", { required: "Please add the name of the institution that presented the achievement" })}
        error={!!errors?.presentedBy}
        helperText={!!errors?.presentedBy ? errors.presentedBy.message : null}
      />
      <label className={classes.label}>Credential URL*</label>
      <TextField
      className={classes.input}
        variant='outlined'
        type="text"
        label="Credential URL"
        fullWidth
        {...register("projectLink", { required: "Add Your projectLink" })}
        error={!!errors?.projectLink}
        helperText={errors?.projectLink ? errors.projectLink.message : null}
      />
      <label className={classes.label}>Description*</label>
      <TextField
      className={classes.input}
        variant='outlined'
        type="text"
        label="Description"
        fullWidth
        {...register("description", { required: "Add project description" })}
        error={!!errors?.description}
        helperText={errors?.description ? errors.description.message : null}
      />
      <Button type="submit" variant='contained' sx={{ backgroundColor: "#6941c6", padding: "16px 57px", width: "150px", alignSelf: "flex-end" }}>Save</Button>
    </form>
  )
}

export default Achievement