import React from 'react'
import { makeStyles } from 'tss-react/mui';
import { FormControl, InputLabel, TextField, Select, MenuItem, Button, Box} from '@mui/material';
import { useForm } from 'react-hook-form';
import CameraIcon from '../icons/Icons/camera.png'
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore';
import firebaseEngine from '../initFirebase/configureFirebase';

const Project = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [location, setLocation] = React.useState('');
  const { db } = firebaseEngine;
  const userId = JSON.parse(localStorage.getItem('user')).uid;

  const appData = collection(db, "UserData");

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
      gap: "30px",
      marginTop: "50px",
      width: "100%"
    },
    imageBox: {
      width: "160px",
      height: "160px",
      position: "relative",
      borderRadius: "10px",
    },
    imageHolder: {
      width: "100%",
      height: "100%",
      backgroundColor: "#f2f4f7",
      borderRadius: "10px"
    },
    cameraIconBox: {
      position: "absolute",
      width: "44px",
      height: "44px",
      bottom: "10px",
      right: "10px",
      borderRadius: "50%",
      backgroundColor: "#e4e7ec",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    },
  }));

  const { classes } = useStyle();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <Box className={classes.imageBox}>
        <img className={classes.imageHolder} />
        <Box className={classes.cameraIconBox}>
          <img src={CameraIcon} alt="camera icon"/>
        </Box>
      </Box>
      <TextField
        variant='outlined'
        type="text"
        label="project name"
        sx={{ width: "400px" }}
        fullWidth
        {...register("projectName", { required: "Add the Project name" })}
        error={!!errors?.projectName}
        helperText={errors?.userprojectName ? errors.projectName.message : null}
      />
      <FormControl>
        <InputLabel id="demo-simple-select-helper-label">Select year*</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={location}
          label="Select Year"
          onChange={handleChange}
        >
          <MenuItem value={10}>2023</MenuItem>
          <MenuItem value={20}>2022</MenuItem>
          <MenuItem value={30}>2021</MenuItem>
          <MenuItem value={30}>2020</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="demo-simple-select-helper-label">Select Project category</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={location}
          label="Select Project category"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ai</MenuItem>
          <MenuItem value={20}>FinTech</MenuItem>
          <MenuItem value={30}>E-commerce</MenuItem>
          <MenuItem value={40}>Education</MenuItem>
          <MenuItem value={50}>Other</MenuItem>
        </Select>
      </FormControl>
      <TextField
        variant='outlined'
        type="text"
        label="Description"
        fullWidth
        {...register("description", { required: "Add project description" })}
        error={!!errors?.description}
        helperText={errors?.description ? errors.description.message : null}
      />
      <TextField
        variant='outlined'
        type="text"
        label="Project Link"
        sx={{ width: "400px" }}
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