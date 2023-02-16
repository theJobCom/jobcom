import React, { useState } from 'react'
import { makeStyles } from 'tss-react/mui';
import { Textarea } from '@mui/joy';
import { FormControl, InputLabel, TextField, Select, MenuItem, Button} from '@mui/material';
import { useForm } from 'react-hook-form';
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore';
import firebaseEngine from '../initFirebase/configureFirebase';
import { MdCancel } from 'react-icons/md';
import { DataStoreState } from '../store/ContexApi';
import { handleYears } from '../utils/years';

const Achievement = ({closeAchievements}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [year, setYear] = React.useState('');
  const [disable, setDisable] = useState(false);
  const { setAlert, user } = DataStoreState();
  const { db } = firebaseEngine;
  const userId = user?.uid;
  const appData = collection(db, "Achievements")
  const prevYears = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];

  const handleChangeYear = (event) => {
    setYear(event.target.value);
  }

  const onSubmit = async (data) => {
    setDisable(true);
    await addDoc(appData, { ...data, createdAt: serverTimestamp(), createdBy: doc(db, "User", userId) });
    setAlert({
      open: true,
      message: "Your achievement has been submitted successfully",
      type: "success"
    })
    closeAchievements()
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
      <h3 className={classes.formTitle}>Achievement</h3>
      <MdCancel className={classes.cancel} onClick={closeAchievements}/>
      <label className={classes.label}>Achievement Title*</label>
      <TextField
      className={classes.input}
        variant='outlined'
        type="text"
        label="Achievement Title"
        fullWidth
        {...register("projectName", { required: "Add the achievement title" })}
        error={!!errors?.projectName}
        helperText={errors?.projectName ? errors.projectName.message : null}
      />
      <label className={classes.label}>Select year*</label>
      <FormControl className={classes.input}>
        <InputLabel className={classes.input} id="demo-simple-select-helper-label">Select year*</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={year}
          {...register("achievementYear", { required: "Add year" })}
          error={!!errors?.achievementYear}
          helperText={errors?.achievementYear ? errors.achievementYear.message : null}
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
        {...register("projectLink", { required: "Add Your Credential URL" })}
        error={!!errors?.projectLink}
        helperText={errors?.projectLink ? errors.projectLink.message : null}
      />
      <label className={classes.label}>Description*</label>
      <Textarea
        className={classes.textarea}
        minCol={60}
        minRow={20}
        {...register("description")}
        required
        placeholder="Type in here…"
        error
        defaultValue="Add the description"
      />
      <Button type="submit" disabled={disable} variant='contained' sx={{ backgroundColor: "#6941c6", padding: "16px 57px", width: "150px", alignSelf: "flex-end" }}>Save</Button>
    </form>
  )
}

export default Achievement