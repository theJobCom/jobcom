import React from 'react'
import { Tabs, Tab, Button } from '@mui/material';
import { Box } from '@mui/system'
import { makeStyles } from 'tss-react/mui';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import LoginTab from '../components/LoginTab';
import SignUpTab from '../components/SignUpTab';
import { FcGoogle } from 'react-icons/fc';
import { GrLinkedin } from 'react-icons/gr';
import { GoMarkGithub } from 'react-icons/go';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import firebaseEngine from '../initFirebase/configureFirebase';
import { useNavigate } from 'react-router-dom';
import { DataStoreState } from '../store/ContexApi';
import coverImage from '../images/coverImage.png';

const LoginPage = () => {
  const [value, setValue] = React.useState("1");
  const navigate = useNavigate();
  const { auth } = firebaseEngine;
  const { setAlert } = DataStoreState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((userCred) => {
        const user = userCred.user
        navigate('/profilepage')
        setAlert({
          open: true,
          message: `You have successfully logged in as ${user.displayName}`,
          type: "success"
        })
      })
      .catch((error) => {
        setAlert({
          open: true,
          message: `${error.message}`,
          type: "error"
        })
    })
  } 

  const useStyle = makeStyles()((theme) => ({
    container: {
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    boxLeft: {
      width: "70vw",
      height: "100%",
      background: "linear-gradient(148.1deg, #F4EBFF 79.21%, #D6BBFB 101.83%);"
    },
    boxRight: {
      width: "30vw",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
    tab: {
      width: "350px",
      padding: "5px",
      borderRadius: "10px",
      border: "1px solid gray",
      textAlign: "center"
    },
    btnGthb: {
      display: "flex",
      gap: 10, 
      backgroundColor: "black",
      color: "white",
      fontFamily: "Work sans",
      textTransform: "capitalize",
      "&:hover": {
      backgroundColor: "black",
      color: "white",
      } 
    },
    btnggle: {
      display: "flex",
      gap: 10, 
      backgroundColor: "white",
      border: "1px solid grey",
      color: "grey",
      fontFamily: "Work sans",
      textTransform: "capitalize"
    },
    btngrp: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      alignItems: "center",
      width: "100%",
      padding: "20px",
    },
    btnLnkd: {
      display: "flex",
      gap: 10, 
      backgroundColor: "#1976d2",
      color: "white",
      fontFamily: "Work sans",
      textTransform: "capitalize",
      "&:hover": {
      backgroundColor: "#1976d2",
      color: "white",
      },
    },
    logo: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "20px"
    },
    logoCircle: {
      width: "43px",
      height: "43px",
      background: "#6941C6",
      borderRadius: "50%"
    },
    logoName: {
      fontSize: "35px",
      lineHeight: "53.16px",
      weight: 600
    }
  }))

  const { classes } = useStyle();

  return (
    <div className={classes.container}>
      <div className={classes.boxLeft}>
        <Box className={classes.content}>
          <h1>Jumpstart Your Dream Career.</h1>
          <Box className={classes.desc}>
            <p>JobCom is a platform that help Tech International Students in Australia to showcase their talents through stand out portfolio</p>
            <p>Share your Portfolio Link with the Recruiters!</p>
          </Box>
          <img src={coverImage} alt='background image' />
        </Box>
      </div>
      <div className={classes.boxRight}>
        <Box className={classes.logo}><Box className={classes.logoCircle}></Box><span className={classes.logoName}>JOBCOM</span></Box>
        <Box className={classes.tab}>
          <TabContext value={value}>
            <Box>
              <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor='secondary' centered>
                <Tab label="login" value="1" />
                <Tab label="sign up" value="2"/>
              </Tabs>
            </Box>
            <TabPanel value="1"><LoginTab/></TabPanel>
            <TabPanel value="2"><SignUpTab /></TabPanel>
            <p>OR</p>
            <Box className={classes.btngrp}>
              <Button className={classes.btnggle} size="large" onClick={() => signInWithGoogle()} fullWidth><FcGoogle/> Continue with Google</Button>
              <Button className={classes.btnLnkd} size="large" fullWidth><GrLinkedin/> Continue with LinkedIn</Button>
              <Button className={classes.btnGthb} size="large" fullWidth><GoMarkGithub/> Continue with GitHub</Button>
            </Box>
          </TabContext>
        </Box>
      </div>
    </div>
  )
}

export default LoginPage