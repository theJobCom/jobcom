import { Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { makeStyles } from 'tss-react/mui'
import { BsPlusLg } from 'react-icons/bs';

const ProfilePage = () => {
  const useStyle = makeStyles()(() => ({
    container: { 
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    wrapper: {
      display: "flex",
      flexDirection: "column",
      gap: "30px"
    },
    topbox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: "30px"
    },
    meta: {
      display: "flex",
      gap: "20px",
      justifyContent: "space-between"
    },
    profileImage: {
      width: "200px",
      height: "200px",
      borderRadius: "50%",
      backgroundColor: "#c0c0c0"
    },
    bottomBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderTop: "2px solid #c0c0c0",
      gap: "30px",
      borderBottom: "2px solid #c0c0c0",
      width: "800px",
      height: "300px",
      cursor: "pointer"
    }
  }))

  const { classes } = useStyle();

  return (
    <div className={classes.container}>
      <Box className={classes.wrapper}>
        <Box className={classes.topbox}>
          <Typography variant="h3">Name</Typography>
          <Box className={classes.meta}>
            <Typography variant="subtitle1">0 Likes</Typography>
            <Typography variant="subtitle1">0 Visits</Typography>
          </Box>
          <img src=" " className={classes.profileImage} />
          <Button variant="outlined">Upload Profile Picture</Button>
        </Box>
        <Box className={classes.bottomBox}>
          <BsPlusLg style={{fontSize: "2rem"}} />
          <Typography variant="subtitle1">Tailor Your Portfolio</Typography>
        </Box>
      </Box>
    </div>
  )
}

export default ProfilePage