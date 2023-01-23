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
        <Box className={classes.descBox}>
          <h5 className={classes.subtitle}>Description</h5>
          <p className={classes.text}>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.</p>
        </Box>
        <Box className={classes.descBoxII}>
          <h5 className={classes.subtitle}>Work Experience</h5>
          <small className={classes.timePeriod}>Jan 2023 - present</small>
          <Box className={classes.jobDesc}>
            <h6 className={classes.jobTitle}>Software Engineer Intern at National Bank Australia</h6>
            <small className={classes.location}>Melbourne, Australia</small>
          </Box>
        </Box>
        <Box className={classes.descBoxII}>
          <h5 className={classes.subtitle}>Education</h5>
          <small className={classes.timePeriod}>Jan 2023 - present</small>
          <Box className={classes.jobDesc}>
            <h6 className={classes.jobTitle}>Software Engineer Intern at National Bank Australia</h6>
            <small className={classes.location}>Melbourne, Australia</small>
          </Box>
        </Box>
        <Box className={classes.descBoxIII}>
          <h5 className={classes.subtitle}>Education</h5>
          <Box className={classes.achieveBox}>
            <img src="" alt="certificate icon" />
            <Box className={classes.achieveDesc}>
              <h6 className={classes.jobTitle}>AWS Developer</h6>
              <small className={classes.issuedBy}>issued by AWS</small>
              <small className={classes.issedTxt}>AWS Certification for Developer</small>
            </Box>
            <small className={classes.timePeriod}>Dec 2022</small>
          </Box>
          <Box className={classes.achieveBox}>
            <img src="" alt="certificate icon" />
            <Box className={classes.achieveDesc}>
              <h6 className={classes.jobTitle}>AWS Developer</h6>
              <small className={classes.issuedBy}>issued by AWS</small>
              <small className={classes.issedTxt}>AWS Certification for Developer</small>
            </Box>
            <small className={classes.timePeriod}>Dec 2022</small>
          </Box>
          <Box className={classes.achieveBox}>
            <img src="" alt="certificate icon" />
            <Box className={classes.achieveDesc}>
              <h6 className={classes.jobTitle}>AWS Developer</h6>
              <small className={classes.issuedBy}>issued by AWS</small>
              <small className={classes.issedTxt}>AWS Certification for Developer</small>
            </Box>
            <small className={classes.timePeriod}>Dec 2022</small>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default PortfolioPage