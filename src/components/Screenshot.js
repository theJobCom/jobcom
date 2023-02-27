import React from 'react'
import imageplaceholder from '../images/projectPlaceholder.png';
import { FaTrash } from 'react-icons/fa';
import { AiFillCamera } from 'react-icons/ai';
import { Box } from '@mui/system';
import { makeStyles } from 'tss-react/mui';

const Screenshot = ({ project }) => {
  const useStyle = makeStyles()(() => ({
    screenshotHolder: {
      position: "relative"
    },
    screenshot: {
      width: "290px",
    },
    projectbtn: {
      width: 50,
      height: 50,
      backgroundColor: "white",
      borderRadius: "50%",
      position: "absolute",
      bottom: 13,
      right: 7,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 27
    },
  }));

  const { classes } = useStyle();

  return (
  <Box className={classes.screenshotHolder}>
    <img src={project?.screenshotURL || imageplaceholder} alt="project screenshot" className={classes.screenshot} />
    {/* <Box className={classes.projectbtn}>{project?.screenshotURL ? <FaTrash/> : <AiFillCamera/>}</Box> */}
  </Box>
  )
}

export default Screenshot