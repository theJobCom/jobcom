import React, { useState } from 'react'
import { makeStyles } from 'tss-react/mui'
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import SideBar from '../components/SideBar';
import Modal from '@mui/material/Modal';
import GeneralTab from '../components/GeneralTab';
import Project from '../components/Project';
import Contact from '../components/Contact'
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import Achievements from '../components/Achievement';
import { DataStoreState } from '../store/ContexApi';
import uuid from 'react-uuid';
import {GiLaurelsTrophy} from 'react-icons/gi'
import Link from '@mui/material/Link';
import { HiExternalLink } from 'react-icons/hi';
import { GrLinkedin } from 'react-icons/gr';
import { GoMarkGithub } from 'react-icons/go';
import { FaTrashAlt } from 'react-icons/fa';
import { BsLaptop } from 'react-icons/bs';
import { MdAlternateEmail } from 'react-icons/md';
import { ImBehance2 } from 'react-icons/im';
import ImageUploader from '../components/ImageUploader';
import Resume from '../components/Resume';
import CoverLetter from '../components/CoverLetter';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'white',
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
};


const ProfilePage = () => {
  const [resume, setResume] = useState(false);
  const [letter, setLetter] = useState(false);
  const [contacts, setContacts] = useState(false);
  const [projects, setProjects] = useState(false);
  const [generals, setGenerals] = useState(false);
  const [experience, setExperience] = useState(false);
  const [educations, setEducations] = useState(false);
  const [achievements, setAchievements] = useState(false);

  const openResume = () => setResume(true);
  const closeResume = () => setResume(false);
  const openLetter = () => setLetter(true);
  const closeLetter = () => setLetter(false);
  const openContact = () => setContacts(true);
  const closeContact = () => setContacts(false)
  const openProject = () => setProjects(true);
  const closeProject = () => setProjects(false);
  const openGeneral = () => setGenerals(true);
  const closeGeneral = () => setGenerals(false);
  const openExperience = () => setExperience(true);
  const closeExperience = () => setExperience(false);
  const openEducation = () => setEducations(true);
  const closeEducation = () => setEducations(false);
  const openAchievements = () => setAchievements(true);
  const closeAchievements = () => setAchievements(false);

  const { education, contact, achievement, project, general, work, resumes, coverLetters } = DataStoreState();

  const generalInfo = general[0];
  const educationInfo = education;
  const contactInfo = contact[0];
  const achievementInfo = achievement;
  const projectInfo = project;
  const workInfo = work;
  const resumeInfo = resumes[0];
  const coverLetterInfo = coverLetters[0];

  const userData = JSON.parse(localStorage.getItem('user'));

  console.log(userData)

  const useStyle = makeStyles()(() => ({
    container: {
      height: "100vh",
      width: "100vw",
      display: "flex",
      overflowX: "hidden",
      fontFamily: "Work Sans",
      color: "#344054",
    },
    wrapper: {
      padding: "50px 20px 20px 160px",
      maxWidth: "1400px",
      margin: "1.5rem auto"
    },
    boxTop: {
      width: "100%",
      display: "flex",
      gap: "71px",
      marginBottom: "80px"
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
      flexDirection: "column",
      gap: "14px",
      marginTop: "10px"
    },
    contactBox: {
      display: "flex",
      gap: "20px"
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
      fontSize: "14px",
      color: "#344054",
      fontWeight: "300",
    },
    entry: {
      display: "flex",
      width: "100%",
      justifyContent: "space-beteen"
    },
    timePeriod: {
      display: "flex",
      flexWrap: "nowrap",
      width: "150px",
      paddingTop: "2px"
    },
    about: {
      fontSize: "14px",
      fontWeight: "400",
      maxWidth: "650px",
      color: "#344054"
    },
    projectAbout: {
      fontSize: "13px",
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
    descBoxII: {
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
      gap: "10px",
    },
    certIcon: {
      fontSize: "120px",
      marginRight: "20px"
    },
    topTitle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%"
    },
    issedTxt: {
      fontSize: "14px",
    },
    projectWrapper: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    project: {
      display: "flex",
      gap: "20px"
    },
    screenshot: {
      width: "290px"
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
      fontWeight: "500",
      fontSize: "14px",
      color: "#667085"
    },
    jobTitle: {
      fontSize: "16px",
      textTransform: "capitalize"
    },
    linkDocs: {
      display: "flex",
      gap: "10px",
      alignItems: "center"
    },
    delDocs: {
      cursor: "pointer"
    }
  }));

  const { classes } = useStyle();

  const dateConvtr = (str) => {
    const dateArr = (str.split('-').slice(0, 2))
    let month;
    switch (+dateArr[1]) {
      case 1:
        month = "Jan"
        break;
      case 2:
        month = "Feb"
        break;
      case 3:
        month = "Mar"
        break;
      case 4:
        month = "Apr"
        break;
      case 5:
        month = "May"
        break;
      case 6:
        month = "Jun"
        break;
      case 7:
        month = "Jul"
        break;
      case 8:
        month = "Aug"
        break;
      case 9:
        month = "Sept"
        break;
      case 10:
        month = "Oct"
        break;
      case 11:
        month = "Nov"
        break;
      case 12:
        month = "Dec"
        break;
      default:
        month = ''
    }
    return `${month} ${dateArr[0]}`
  }

  return (
    <div className={classes.container}>
      <SideBar />
      <Box className={classes.wrapper}>
        <Box className={classes.boxTop}>
          <Box className={classes.boxLeft}>
            <Box className={classes.profileSec}>
              <ImageUploader/>
              <span className={classes.userName}>{generalInfo?.name || 'Your Name'}</span>
              {generalInfo?.nationality ? <p className={classes.country}>{`${generalInfo?.location}, ${generalInfo?.nationality}`}</p> : ""}
              {generalInfo?.role ? <p className={classes.role}>{generalInfo.role}</p> : ""}
              {/* {generalInfo?.location ? <small className={classes.location}>{generalInfo?.location}</small> : ""} */}
              <Box className={classes.metadata}>
              </Box>
            </Box>
            <Box className={classes.viewDocs}>
              {!resumeInfo ? <Button variant="text" className={classes.btnAdd} onClick={openResume}>+ Upload Resume</Button> : (<Box className={classes.linkDocs}><Link href={resumeInfo?.resume} target="_blank">View Resume</Link><FaTrashAlt className={classes.delDocs}/></Box>)}
                {!coverLetterInfo ? <Button variant="text" className={classes.btnAdd} onClick={openLetter}>+ Upload Cover Letter</Button> : (<Box className={classes.linkDocs}><Link href={coverLetterInfo?.coverLetters} target="_blank">View Cover Letter</Link><FaTrashAlt className={classes.delDocs}/></Box>)}
            </Box>
              <h5 className={classes.subtitle}>Contact me</h5>
            <Box className={classes.contacts}>
              {
                contactInfo &&
              <Box className={classes.contactBox}>
                <Link href={contactInfo?.linkedIn} className={classes.linkedIn}><GrLinkedin/></Link>
                <Link href={contactInfo?.role} className={classes.gthb}><GoMarkGithub/></Link>
                <Link href={contactInfo?.behance} className={classes.medium}><ImBehance2/></Link>
                <Link href={contactInfo?.email} className={classes.medium}><MdAlternateEmail/></Link>
                <Link href={contactInfo?.portfolio} className={classes.medium}><BsLaptop/></Link>
              </Box>
              }
              {!contactInfo && <Button variant="text" className={classes.btnAdd} onClick={openContact}>+ Add Contact Details</Button>}
            </Box>
          </Box>
          <Box className={classes.boxRight}>
            <Box className={classes.descBox}>
              <h5 className={classes.subtitle}>Description</h5>
              <p className={classes.text}>{generalInfo?.about || ''}</p>
            {generalInfo?.about ? "" : <Button variant="text" className={classes.btnAdd} onClick={openGeneral}>+ Add General information</Button>}
            </Box>
            <Box className={classes.descBoxII}>
              <h5 className={classes.subtitle}>Work Experience</h5>
              {
                workInfo?.map((work) => {
              return (<Box className={classes.entry} key={uuid()}>
                <small className={classes.timePeriod}>{`${dateConvtr(work.fromDate)} - ${(work?.endDate && dateConvtr(work.endDate)) || (work?.currently && 'Present')}`}</small>
                <Box className={classes.jobDesc}>
                  <h6 className={classes.jobTitle}>{work.title}</h6>
                  <small className={classes.location}>{work.location}</small>
                  <p className={classes.about}>{work.description}</p>
                </Box>
              </Box>)
                })
              }
              <Button variant="text" className={classes.btnAdd} onClick={openExperience}>+ Add Work Experience</Button>
            </Box>
            <Box className={classes.descBoxII}>
              <h5 className={classes.subtitle}>Education</h5>
              {
                educationInfo.map((education) => {
                  return (
                    <Box className={classes.entry} key={uuid()}>
                      <small className={classes.timePeriod}>{`${dateConvtr(education.fromDate)} - ${dateConvtr(education.endDate)}`}</small>
                      <Box className={classes.jobDesc}>
                        <h6 className={classes.jobTitle}>{education.degree}</h6>
                        <small className={classes.location}>{education.location}</small>
                        <p className={classes.about}>{education.description}</p>
                      </Box>
                    </Box>
                  )
                })
              }
              <Button variant="text" className={classes.btnAdd} onClick={openEducation}>+ Add Education</Button>
            </Box>
            <Box className={classes.descBoxIII}>
              <h5 className={classes.subtitle}>Achievements</h5>
              {
                achievementInfo.map((achievement) => {
                  return (
                  <Box className={classes.achieveBox} key={uuid()}>
                    <GiLaurelsTrophy className={classes.certIcon}/>
                    <Box className={classes.achieveDesc}>
                      <Box className={classes.topTitle}>
                          <h6 className={classes.jobTitle}>{achievement?.projectName}</h6>
                          <small className={classes.timePeriod}>{achievement?.achievementYear}</small>
                      </Box>
                        <small className={classes.issuedBy}>issued by {achievement.presentedBy}</small>
                        <small className={classes.issedTxt}>{achievement?.description}</small>
                    </Box>
                  </Box>
                  )
                })
              }
                <Button variant="text" className={classes.btnAdd} onClick={openAchievements}>+ Add Achievements</Button>
            </Box>
          </Box>
        </Box>
        <Box className={classes.boxBottom}>
          <h5 className={classes.subtitle}>Projects</h5>
          {
            projectInfo.map((project) => {
              return (
                <Box className={classes.project} key={uuid()}>
                  <img src={project?.screenshotURL} alt="project screenshot" className={classes.screenshot} />
                  <Box className={classes.projectDesc}>
                    <h6 className={classes.projectTitle}>{project?.projectName}<span className={classes.period}>{project?.name}</span></h6>
                    <small className={classes.industry}>{project?.category}</small>
                    <small className={classes.text}>
                      {project?.description}
                    </small>
                    <Link href={project?.projectLink} classes={classes.smallLink}>See more <HiExternalLink/></Link>
                  </Box>
                </Box>
              )
            })
          }
            <Button variant="text" className={classes.btnAdd} onClick={openProject}>+ Add Project</Button>
        </Box>
      </Box>
      <Modal
        open={resume}
        onClose={closeResume}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Resume closeResume={closeResume}/> 
        </Box>
      </Modal>
      <Modal
        open={letter}
        onClose={closeLetter}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CoverLetter closeLetter={closeLetter}/>
        </Box>
      </Modal>
      <Modal
        open={contacts}
        onClose={closeContact}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Contact closeContact={closeContact} />
        </Box>
      </Modal>
      <Modal
        open={generals}
        onClose={closeGeneral}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <GeneralTab closeGeneral={closeGeneral} />
        </Box>
      </Modal>
      <Modal
        open={projects}
        onClose={closeProject}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Project closeProject={closeProject} />
        </Box>
      </Modal>
      <Modal
        open={experience}
        onClose={closeExperience}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <WorkExperience closeExperience={closeExperience} />
        </Box>
      </Modal>
      <Modal
        open={educations}
        onClose={closeEducation}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Education closeEducation={closeEducation} />
        </Box>
      </Modal>
      <Modal
        open={achievements}
        onClose={closeAchievements}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Achievements closeAchievements={closeAchievements} />
        </Box>
      </Modal>

    </div>
  )
}

export default ProfilePage