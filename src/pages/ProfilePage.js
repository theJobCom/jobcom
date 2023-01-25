import { Button, Modal } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { makeStyles } from 'tss-react/mui'
import SideBar from '../components/SideBar';
import CameraIcon from '../icons/Icons/camera.png'
import ApplicationForm from '../pages/ApplicationForm'

const ProfilePage = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const user = JSON.parse(localStorage.getItem('user'));

  console.log(user);

  const useStyle = makeStyles()(() => ({
    container: {
      height: "100vh",
      display: "flex",
    },
    mainBox: {
      padding: "60px 60px 60px 130px",
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
      color: "#344054",
      fontFamily: "Work Sans"
    },
    userData: {
      display: "flex",
      alignItems: "center",
      width: "150px",
      justifyContent: "space-between",
      fontFamily: "Work Sans"
    },
    data: {
      fontWeight: "500",
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.15px",
      color: "#344054",
      fontFamily: "Work Sans"
    },
    num: {
      fontWeight: "700",
    },
    rightBox: {
      width: "60vw",
      height: "665px",
      border: "2px dashed grey",
      padding: "161px 53px",
      borderRadius: "10px"
    },
    list: {
      marginLeft: 20,
      lineHeight: "24px",
      letterSpacing: "0.15px",
      fontFamily: "Work sans",
      color: "#344054"
    },
    title: {
      fontWeight: "600",
      fontSize: "28px",
      lineHeight: "36px",
      color: "#344054",
      fontFamily: "Work Sans",
      marginBottom: "16px"
    },
    tagline: {
      fontFamily: "Work Sans",
      fontWeight: "300",
      fontSize: "22px",
      lineHeight: "28px",
      color: "#344054",
      marginBottom: "63px"
    },
    btn: {
      marginTop: "48px",
      backgroundColor: "#6941c6",
      padding: "16px",
      borderRadius: "10px",
      textTransform: "capitalize",
      color: "#fff",
      fontFamily: "Work Sans",
      fontSize: "14px",
      "&:hover": {
        backgroundColor: "#6941c6",
        color: "#fff",
      },
      modal: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%",
        p: 24,
        width: "500px"
      }
    }
  }))

  const { classes } = useStyle();

  return (
    <div className={classes.container}>
      <SideBar />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <ApplicationForm />
      </Modal>
      <Box className={classes.mainBox}>
        <Box className={classes.leftBox}>
          <Box className={classes.imageBox}>
            <img className={classes.imageHolder} alt="" />
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
          <p className={classes.title}>Welcome to JobCom 🎉</p>
          <p className={classes.tagline}>One-Click to showcase your best work in one site</p>
          </Box>
          <ol className={classes.list}>
            <li className={classes.listItem}>Add Basic information about you</li>
            <li>Add more stuff, like projects or achievements</li>
            <li>Add an image and hightlight your favorite project</li>
          </ol>
          <Button onClick={handleOpen} className={classes.btn}>+ Make your Own Portfolio</Button>
        </Box>
      </Box>
    </div>
  )
}

export default ProfilePage