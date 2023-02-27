import { Box } from '@mui/system';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui'
import ExitIcon from "../icons/Vector.png"
import logo from "../images/image13.png"
import { DataStoreState } from '../store/ContexApi';

const SideBar = () => {
  const { setAlert } = DataStoreState();
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/profilepage')
  }

  const logOut = () => {
    localStorage.clear()
    navigate('/')
    setAlert({
      open: true,
      message: `You've successfully logged out`,
      type: "success"
    })
  }
  const useStyle = makeStyles()(() => ({
    sideBar: {
      width: "100px",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      borderRight: "1px solid #d0d5dd", 
      padding: "40px 0",
      position: "fixed"
    },
    logo: {
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      cursor: "pointer"
    },
    exit: {
      cursor: "pointer",
    }
  }));

  const { classes } = useStyle();
return (
  <div className={classes.sideBar}>
    <Box className={classes.logo} onClick={() => onClick()}>
      <img src={logo} alt="company logo"/>
    </Box>
    <Box className={classes.exit} onClick={() => logOut()}>
      <img src={ExitIcon} alt="exit icon" className={classes.exit} />
    </Box>
    </div>
  )
}

export default SideBar