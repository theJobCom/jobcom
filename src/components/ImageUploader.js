import React from 'react'
import { Box } from '@mui/system';
import cameraIcon from '../icons/Icons/camera.png'
import { makeStyles } from 'tss-react/mui'

const ImageUploader = () => {
  const userData = JSON.parse(localStorage.getItem('user'));

  const useStyle = makeStyles()(() => ({
    imageBox: {
      position: "relative",
      width: "250px",
      height: "250px",
      marginBottom: "22px",
      backgroundColor: "#f2f4f7",
      borderRadius: "10px"
    },
    profile: {
      width: "100%",
      height: "100%",
      borderRadius: "10px",
      position: "relative"
    },
    boxIconBox: {
      position: "absolute",
      bottom: "11px",
      right: "11px",
      width: "54px",
      height: "54px",
      borderRadius: "50%",
      backgroundColor: "#e4e7eC",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    },
  }))

  const { classes } = useStyle();

  return (
  <Box className={classes.imageBox}>
    <img src={userData.photoURL} alt="user avatar" className={classes.profile} />
    <Box className={classes.boxIconBox}>
      <img src={cameraIcon} alt="profilePic" className={classes.cameraIcon} />
    </Box>
  </Box>
  )
}

export default ImageUploader