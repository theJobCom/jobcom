import React from 'react'
import { makeStyles } from 'tss-react/mui';
import { FormControl, InputLabel, TextField, Select, MenuItem, Button} from '@mui/material';
import { useForm } from 'react-hook-form';
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore';
import firebaseEngine from '../initFirebase/configureFirebase';

const Project = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [location, setLocation] = React.useState('');
  const [year, setYear] = React.useState('');
  const { db } = firebaseEngine;
  const userId = JSON.parse(localStorage.getItem('user')).uid;

  const appData = collection(db, "Project");

  const handleChange = (event) => {
    setLocation(event.target.value)
  }

  const handleChangeYear = (event) => {
    setYear(event.target.value)
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

  const { classes } = useStyle();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <h3 className={classes.formTitle}>Project</h3>
      {/* A */}
      {/* <TextField
      className={classes.input}
        type="file"
        sx={{width: 300}}
        {...register("projectCover", {required: "Add project screenshot"})}
      /> */}
      <label className={classes.label}>Project name*</label>
      <TextField
      className={classes.input}
        variant='outlined'
        type="text"
        label="project name"
        fullWidth
        {...register("projectName", { required: "Add the Project name" })}
        error={!!errors?.projectName}
        helperText={errors?.userprojectName ? errors.projectName.message : null}
      />
      <label className={classes.label}>Year*</label>
      <FormControl className={classes.input}>
        <InputLabel id="demo-simple-select-helper-label">Select year*</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={year}
          {...register("year")}
          label="Select Year"
          onChange={handleChangeYear}
        >
          <MenuItem value={"2023"}>2023</MenuItem>
          <MenuItem value={"2022"}>2022</MenuItem>
          <MenuItem value={"2021"}>2021</MenuItem>
          <MenuItem value={"2020"}>2020</MenuItem>
        </Select>
      </FormControl>
      <label className={classes.label}>Project Category*</label>
      <FormControl className={classes.input}>
        <InputLabel id="demo-simple-select-helper-label">Select Project category</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={location}
          {...register("category")}
          label="Select Project category"
          onChange={handleChange}
        >
          <MenuItem value={"Ai"}>Ai</MenuItem>
          <MenuItem value={"FinTech"}>FinTech</MenuItem>
          <MenuItem value={"E-commerce"}>E-commerce</MenuItem>
          <MenuItem value={"Education"}>Education</MenuItem>
          <MenuItem value={"Other"}>Other</MenuItem>
        </Select>
      </FormControl>
      <label className={classes.label}>Description*</label>
      <TextField
      className={classes.input}
        variant='outlined'
        type="text"
        {...register("description", { required: "Add project description" })}
        label="Description"
        fullWidth
        error={!!errors?.description}
        helperText={errors?.description ? errors.description.message : null}
      />
      <label className={classes.label}>Project URL*</label>
      <TextField
      className={classes.input}
        variant='outlined'
        type="text"
        label="Project Link"
        fullWidth
        {...register("projectLink", { required: "Add Your projectLink" })}
        error={!!errors?.projectLink}
        helperText={errors?.projectLink ? errors.projectLink.message : null}
      />
      <Button type="submit" variant='contained' sx={{ backgroundColor: "#6941c6", padding: "16px 57px", width: "150px", alignSelf: "flex-end" }}>Done</Button>
    </form>
  )
}
  export default Project