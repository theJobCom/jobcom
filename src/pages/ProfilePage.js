import React from 'react'
import { makeStyles } from 'tss-react/mui'
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import cameraIcon from '../icons/Icons/camera.png'
import SideBar from '../components/SideBar';

const ProfilePage = () => {
  const [resume, setResume] = useState(false);
  const [letter, setLetter] = useState(false);
  const [contact, setContact] = useState(false);
  const [project, setProject] = useState(false);
  const [general, setGeneral] = useState(false);
  const [experience, setExperience] = useState(false);
  const [education, setEducation] = useState(false);
  const [achievements, setAchievements] = useState(false);

  const useStyle = makeStyles()(() => ({
    container: {
      height: "100vh",
      width: "100vw",
      display: "flex",
      overflowX: "hidden"
    },
    wrapper: {
      padding: "50px 20px 20px 160px",
      maxWidth: "1400px"
    },
    boxTop: {
      width: "100%",
      display: "flex",
      gap: "71px",
      marginBottom: "80px"
    },
    imageBox: {
      position: "relative",
      width: "250px",
      height: "250px",
      marginBottom: "22px",
      backgroundColor: "#f2f4f7",
      borderRadius: "10px"
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
    },
    userName: {
      fontWeight: "600",
      fontSize: "21px",
      lineHeight: "28px",
      marginBottom: "8px"
    },
    country: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "600",
    },
    role: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "500",
    },
    location: {
      fontWeight: "500",
      fontSize: "12px",
    },
    metadata: {
      marginTop: "20px",
      marginBottom: "36px",
      display: "flex",
      width: "70%",
      alignItems: "center",
      justifyContent: "space-between"
    },
    viewDocs: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      marginBottom: "36px"
    },
    links: {
      fontWeight: "700",
      fontSize: "16px",
      lineHeight: "24px",
      textTransform: "uppercase",
      letterSpacing: "0.5px",
      color: "#6941C6",
      textDecoration: "none",
      display: "flex",
      alignItems: "center"
    },
    contacts: {
      display: "flex",
      gap: "14px",
      marginTop: "10px"
    },
    linkedIn: {
      fontSize: 28
    },
    gthb: {
      fontSize: 28,
      color: "#000"
    },
    medium: {
      fontSize: 30,
      color: "#000"
    },
    boxRight: {
      display: "flex",
      flexDirection: "column",
      gap: "32px",
      maxWidth: "1000px"
    },
    subtitle: {
      fontSize: "22px",
      fontWeight: "600",
      lineHeight: "28px",
      marginBottom: "16px"
    },
    text: {
      fontSize: "16px",
      fontWeight: "300",
      lineHeight: "20px"
    },
    entry: {
      display: "flex",
      gap: "29px"
    },
    about: {
      fontSize: "13px"
    },
    jobDesc: {
      display: "flex",
      flexDirection: "column",
      gap: "5px"
    },
    descBoxIII: {
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    },
    achieveBox: {
      display: "flex",
      gap: "24px",
      width: "100%"
    },
    achieveDesc: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "10px"
    },
    certIcon: {
      height: "100px"
    },
    topTitle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "450px"
    },
    issedTxt: {
      fontSize: "12px"
    },
    projectWrapper: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },

    project: {
      display: "flex",
      gap: "20px",
    },
    projectDesc: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "13px",
    },
    projectTitle: {
      fontSize: "16px",
      fontWeight: "600",
      lineHeight: "16px"
    },
    period: {
      fontWeight: "400",
      margitextt: "8px",
    },
    btnAdd: {
      display: "flex",
      justifyContent: "start",
      fontFamily: "Work Sans",
      fontWeight: "500",
      fontSize: "14px",
      color: "#667085"
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
                <Box className={classes.boxIconBox}>
                  <img src={cameraIcon} alt="profilePic" className={classes.cameraIcon} />
                </Box>
              </Box>
              <span className={classes.userName}>John Doe (@john.doe)</span>
              <Box className={classes.metadata}>
              </Box>
            </Box>
            <Box className={classes.viewDocs}>
                <Button variant="text" className={classes.btnAdd} sx={{textAlign: "left"}}>+ Upload Resume</Button>
                <Button variant="text" className={classes.btnAdd}>+ Upload Cover Letter</Button>
            </Box>
              <h5 className={classes.subtitle}>Contact me</h5>
            <Box className={classes.contacts}>
              <Button variant="text" className={classes.btnAdd}>+ Add Contact Details</Button>
            </Box>
          </Box>
          <Box className={classes.boxRight}>
            <Box className={classes.descBox}>
              <h5 className={classes.subtitle}>Description</h5>
            <Button variant="text" className={classes.btnAdd}>+ Add General information</Button>
            </Box>
            <Box className={classes.descBoxII}>
              <h5 className={classes.subtitle}>Work Experience</h5>
              <Button variant="text" className={classes.btnAdd}>+ Add Work Experience</Button>
            </Box>
            <Box className={classes.descBoxII}>
              <h5 className={classes.subtitle}>Education</h5>

              <Button variant="text" className={classes.btnAdd}>+ Add Education</Button>
            </Box>
            <Box className={classes.descBoxIII}>
              <h5 className={classes.subtitle}>Achievements</h5>
                <Button variant="text" className={classes.btnAdd}>+ Add Achievements</Button>
            </Box>
          </Box>
        </Box>
        <Box className={classes.boxBottom}>
          <h5 className={classes.subtitle}>Projects</h5>

            <Button variant="text" className={classes.btnAdd}>+ Add Project</Button>
          {/* <Box className={classes.projectWrapper}>
            <Box className={classes.projects}>
              <Box className={classes.project}>
                <img src={project1} alt="project screenshot" />
                <Box className={classes.projectDesc}>
                  <h6 className={classes.projectTitle}>Ai ChatBox <span className={classes.period}>2023</span></h6>
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
                  <h6 className={classes.projectTitle}>Ai ChatBox <span className={classes.period}>2023</span></h6>
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
                  <h6 className={classes.projectTitle}>Ai ChatBox <span className={classes.period}>2023</span></h6>
                  <small className={classes.industry}>Artificial Intelligence</small>
                  <small className={classes.text}>
                    ChatBot's Visual Builder empowers you to create perfect AI chatbots quickly and with no coding. Drag and drop conversational elements, and test them in real time to design engaging chatbot Stories.
                  </small>
                  <Link href="#" classes={classes.smallLink}>See more <HiExternalLink/></Link>
                </Box>
              </Box>
            </Box>
          </Box> */}
        </Box>
      </Box>
    </div>
  )
}

export default ProfilePage