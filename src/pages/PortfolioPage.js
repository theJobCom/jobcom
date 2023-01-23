import React from 'react'
import { makeStyles } from 'tss-react/mui'
import { Box } from '@mui/system';
import Link from '@mui/material/Link';
import { GrLinkedin } from 'react-icons/gr';
import { GoMarkGithub } from 'react-icons/go';
import { AiFillMediumCircle } from 'react-icons/ai';

const PortfolioPage = () => {

  const useStyle = makeStyles()(() => ({

  }));

  const { classes } = useStyle();


  return (
    <div className={classes.container}>
      <Box className={classes.boxLeft}>
        <Box className={classes.profileSec}>
          <img src="" alt="profilePic" />
          <span className={classes.userName}></span>
          <p>🇩🇪 Germany</p>
          <p className={classes.role}>Software Developer</p>
          <small className={classes.location}></small>
          <Box className={classes.metadata}>
            <p className={classes.data}><strong>28</strong> Likes</p>
            <p className={classes.data}><strong>129</strong> Visits</p>
          </Box>
        </Box>
        <Box className={classes.viewDocs}>
          <Link href="#" className={classes.links}>View Resume</Link>
          <Link href="#" className={classes.links}>View Cover letter</Link>
        </Box>
        <Box className={classes.contacts}>
          <Link href="#"><GrLinkedin/></Link>
          <Link href="#"><GoMarkGithub/></Link>
          <Link href="#"><AiFillMediumCircle/></Link>
        </Box>
      </Box>
      <Box className={classes.boxRight}>
      </Box>
    </div>
  )
}

export default PortfolioPage