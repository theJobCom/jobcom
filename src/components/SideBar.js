import { Box } from '@mui/system';
import React from 'react'
import { makeStyles } from 'tss-react/mui'
import ExitIcon from "../icons/Vector.png"

const SideBar = () => {
  const useStyle = makeStyles()(() => ({
    sideBar: {
      width: "100px",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      borderRight: "1px solid #d0d5dd", 
      padding: "40px 0"
    },
    logo: {
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      backgroundColor: "#6941c6",
      cursor: "pointer"
    },
    exit: {
      cursor: "pointer",
    }
  }));

  const { classes } = useStyle();
return (
  <div className={classes.sideBar}>
    <Box className={classes.logo}></Box>
    <Box className={classes.exit}>
      <img src={ExitIcon} alt="exit icon" className={classes.exit} />
    </Box>
    </div>
  )
}

export default SideBar