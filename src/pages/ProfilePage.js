import { Typography, Button } from '@mui/material';
import { Box, letterSpacing } from '@mui/system';
import React from 'react'
import { makeStyles } from 'tss-react/mui'
import SideBar from '../components/SideBar';
import CameraIcon from '../icons/Icons/camera.png'

const ProfilePage = () => {
  const useStyle = makeStyles()(() => ({
    container: {
      height: "100vh",
      display: "flex",
    },
    mainBox: {
      padding: "60px",
      display: "flex",
      gap: "50px",
      justifyContent: "center"
    },
    leftBox: {
      display: "flex",
      flexDirection: "column",
      gap: "24px"
    },
    imageBox: {
      width: "260px",
      height: "260px",
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
      width: "64px",
      height: "64px",
      bottom: "10px",
      right: "10px",
      borderRadius: "50%",
      backgroundColor: "#e4e7ec",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer"
    },
    username: {
      fontWeight: "600",
      fontSize: "22px",
      lineHeight: "28px",
      color: "#344054"
    },
    userData: {
      display: "flex",
      alignItems: "center",
      width: "150px",
      justifyContent: "space-between"
    },
    data: {
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.15px",
      color: "#344054"
    },
    num: {
      fontWeight: "700",
    }
  }))

  const { classes } = useStyle();

  return (
    <div className={classes.container}>
      <SideBar />
      <Box className={classes.mainBox}>
        <Box className={classes.leftBox}>
          <Box className={classes.imageBox}>
            <img className={classes.imageHolder} />
            <Box className={classes.cameraIconBox}>
              <img src={CameraIcon} alt="camera icon"/>
            </Box>
          </Box>
          <Box className={classes.metaData}>
            <p className={classes.username}>@john.doe</p>
            <Box className={classes.userData}>
              <p className={classes.data}><span className={classes.num}>0</span> Likes</p>
              <p className={classes.data}><span className={classes.num}>0</span> Visits</p>
            </Box>
          </Box>
        </Box>
        <Box className={classes.rightBox}>
          <Box className={classes.intro}>
          <h2 className={classes.title}>Welcome to JobCom</h2>
          <h3 className={classes.tagline}>One-Click to showcase your best work in one site</h3>
          </Box>
          <ol className={classes.list}>
            <li>Add Basic information about you</li>
            <li>Add more stuff, like projects or achievements</li>
            <li>Add an image and hightlight your favorite project</li>
          </ol>
          <Button>+ Make your Own Portfolio</Button>
        </Box>
      </Box>
    </div>
  )
}

export default ProfilePage