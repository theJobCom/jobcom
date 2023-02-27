import React, { useEffect, useRef, useState } from 'react'
import { makeStyles } from 'tss-react/mui';
import { FormControl, InputLabel, TextField, Select, MenuItem, Button } from '@mui/material';
import { Textarea } from '@mui/joy';
import { useForm } from 'react-hook-form';
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore';
import firebaseEngine from '../initFirebase/configureFirebase';
import { MdCancel } from 'react-icons/md';
import { DataStoreState } from '../store/ContexApi';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { handleYears } from '../utils/years';

const Project = ({ closeProject }) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState(null);
  const [progess, setProgress] = useState(0);
  const [photoURL, setPhotoURL] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { setAlert } = DataStoreState();
  const [location, setLocation] = React.useState('');
  const [year, setYear] = React.useState('');
  const { user } = DataStoreState();
  const { db, storage } = firebaseEngine;
  const userId = user?.uid;
    const prevYears = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];

  const appData = collection(db, "Project");

  const handleChange = (event) => {
    setLocation(event.target.value)
  }

  const handleChangeYear = (event) => {
    setYear(event.target.value)
  }

  const filePickerRef = useRef();

  const uploadScreenshot = (file) => {
    if (!file) return;
    const storageRef = ref(storage, `/files/screenshots/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on("state_changed", (snapshot) => {
      const prog = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
      setProgress(prog);
    },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then(url => {
          setPhotoURL(url)
        })
    }
    )
  }

  useEffect(() => {
    if (!file) {
      return
    }

    const fileReader = new FileReader()
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file)
    localStorage.setItem('screenshot', file)
    uploadScreenshot(file)
    // eslint-disable-next-line
  }, [file])

  function pickedHandler(event) {
    let pickedFile;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
    }
  }

  function pickedImageHandler() {
    filePickerRef.current.click()
  }

  const onSubmit = async (data) => {
    await addDoc(appData, { ...data, screenshotURL: photoURL, createdAt: serverTimestamp(), createdBy: doc(db, "User", userId) })
    setAlert({
      open: true,
      message: "Your project has been submitted successfully",
      type: "success"
    })
    closeProject();
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
      marginBottom: "20px",
    },
    btn: {
      color: "#344054",
      width: "150px",
      textTransform: "capitalize", 
      marginBottom: "18px",
    },
    textarea: {
      height: 100,
      marginBottom: 13,
      padding: "15px",
      fontSize: "inherit",
      fontFamily: "inherit",
    }
  }));

  const { classes } = useStyle();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <MdCancel className={classes.cancel} onClick={closeProject}/>
      <h3 className={classes.formTitle}>Project</h3>
      <label className={classes.label}>Project cover</label>
      <input
        style={{ display: "none" }}
        type="file"
        accept='.jpg, .png, .jpeg'
        ref={filePickerRef}
        onChange={pickedHandler}
      />
      {!file ? <Button variant="text" className={classes.btn} onClick={pickedImageHandler}>+ Cover image</Button> : <p className={classes.btn}>{file.name}</p>}
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
          {...register("year", { required: "Please add project year" })}
          error={!!errors?.year}
          helperText={errors?.year ? errors.year.message : null}
          label="Select Year"
          onChange={handleChangeYear}
        >
          {
            handleYears(prevYears).map((year) => {
              return (
                <MenuItem value={`${year}`}>{year}</MenuItem>
              )
            })
          }
        </Select>
      </FormControl>
      <label className={classes.label}>Project Category*</label>
      <FormControl className={classes.input}>
        <InputLabel id="demo-simple-select-helper-label">Select Project category</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={location}
          {...register("category", { required: "Please add category" })}
          error={!!errors?.category}
          helperText={errors?.category ? errors.category.message : null}
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
      <label className={classes.label}>Description</label>
      <Textarea
        className={classes.textarea}
        minRow={20}
        {...register("description")}
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