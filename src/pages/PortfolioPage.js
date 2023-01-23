import React from 'react'
import { makeStyles } from 'tss-react/mui'
import { Box, positions } from '@mui/system';
import Link from '@mui/material/Link';
import { GrLinkedin } from 'react-icons/gr';
import { GoMarkGithub } from 'react-icons/go';
import { AiFillMediumCircle } from 'react-icons/ai';
import { HiExternalLink } from 'react-icons/hi';
import profile from '../images/profile.png'
import cert1 from '../images/cert1.png'
import cert2 from '../images/cert2.png'
import cert3 from '../images/cert3.png'
import project1 from '../images/project1.png'
import project2 from '../images/project2.png'
import project3 from '../images/project3.png'
import cameraIcon from '../icons/Icons/camera.png'
import SideBar from '../components/SideBar';

const PortfolioPage = () => {

  const useStyle = makeStyles()(() => ({
    container: {
      height: "100vh",
      width: "100vw",
      display: "flex",
    },
    wrapper: {
      padding: "50px 20px"
    },
    boxTop: {
      width: "100%",
      display: "flex"
    },
    imageBox: {
      position: "relative",
      width: "250px",
      height: "250px",
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
    }
  }));

  const { classes } = useStyle();


  return (
    <div className={classes.container}>
      <SideBar />
      <Box className={classes.wrapper}>
        <Box className={classes.boxTop}>
          <Box className={classes.boxLeft}>
            <Box className={classes.profileSec}>
              <Box className={classes.imageBox}>
                <img src={profile} alt="profilePic" className={classes.profile} />
                <Box className={classes.boxIconBox}>
                  <img src={cameraIcon} alt="profilePic" className={classes.cameraIcon} />
                </Box>
              </Box>
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
                <img src={cert1} alt="certificate icon" />
                <Box className={classes.achieveDesc}>
                  <h6 className={classes.jobTitle}>AWS Developer</h6>
                  <small className={classes.issuedBy}>issued by AWS</small>
                  <small className={classes.issedTxt}>AWS Certification for Developer</small>
                </Box>
                <small className={classes.timePeriod}>Dec 2022</small>
              </Box>
              <Box className={classes.achieveBox}>
                <img src={cert2} alt="certificate icon" />
                <Box className={classes.achieveDesc}>
                  <h6 className={classes.jobTitle}>AWS Developer</h6>
                  <small className={classes.issuedBy}>issued by AWS</small>
                  <small className={classes.issedTxt}>AWS Certification for Developer</small>
                </Box>
                <small className={classes.timePeriod}>Dec 2022</small>
              </Box>
              <Box className={classes.achieveBox}>
                <img src={cert3} alt="certificate icon" />
                <Box className={classes.achieveDesc}>
                  <h6 className={classes.jobTitle}>AWS Developer</h6>
                  <small className={classes.issuedBy}>issued by AWS</small>
                  <small className={classes.issedTxt}>AWS Certification for Developer</small>
                </Box>
                <small className={classes.timePeriod}>Dec 2022</small>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={classes.boxBottom}>
          <h5 className={classes.subtitle}>Description</h5>
          <Box className={classes.projects}>
            <Box className={classes.project}>
              <img src={project1} alt="project screenshot" />
              <Box className={classes.projectDesc}>
                <h6 className={classes.jobTitle}>Ai ChatBox <span className={classes.timePeriod}>2023</span></h6>
                <small className={classes.industry}>Artificial Intelligence</small>
                <small className={classes.text}>
                  ChatBot's Visual Builder empowers you to create perfect AI chatbots quickly and with no coding. Drag and drop conversational elements, and test them in real time to design engaging chatbot Stories.
                </small>
                <Link href="#" classes={classes.smallLink}>See more <HiExternalLink/></Link>
              </Box>
            </Box>
          </Box>
          <Box className={classes.projects}>
            <Box className={classes.project}>
              <img src={project2} alt="project screenshot" />
              <Box className={classes.projectDesc}>
                <h6 className={classes.jobTitle}>Ai ChatBox <span className={classes.timePeriod}>2023</span></h6>
                <small className={classes.industry}>Artificial Intelligence</small>
                <small className={classes.text}>
                  ChatBot's Visual Builder empowers you to create perfect AI chatbots quickly and with no coding. Drag and drop conversational elements, and test them in real time to design engaging chatbot Stories.
                </small>
                <Link href="#" classes={classes.smallLink}>See more <HiExternalLink/></Link>
              </Box>
            </Box>
          </Box>
          <Box className={classes.projects}>
            <Box className={classes.project}>
              <img src={project3} alt="project screenshot" />
              <Box className={classes.projectDesc}>
                <h6 className={classes.jobTitle}>Ai ChatBox <span className={classes.timePeriod}>2023</span></h6>
                <small className={classes.industry}>Artificial Intelligence</small>
                <small className={classes.text}>
                  ChatBot's Visual Builder empowers you to create perfect AI chatbots quickly and with no coding. Drag and drop conversational elements, and test them in real time to design engaging chatbot Stories.
                </small>
                <Link href="#" classes={classes.smallLink}>See more <HiExternalLink/></Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default PortfolioPage