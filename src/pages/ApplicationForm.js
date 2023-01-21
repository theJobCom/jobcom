import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from 'tss-react/mui';
import { display } from '@mui/system';
import GeneralTab from '../components/GeneralTab';
import { Button } from '@mui/material';
import Project from '../components/Project';
import Achievement from '../components/Achievement';
import Contact from '../components/Contact'
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function ApplicationForm() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const useStyle = makeStyles()((theme) => ({
    modal: {
      width: 750,
      backgroundColor: 'white',
      display: 'flex',
      height: "802px",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      boxShadaow: 24,
      fontFamily: "Work Sans",
      textTransform: "capitalize",
      color: "white"
    },
    tabText: {
      fontFamily: "Work Sans",
      color: "black",
      textTransform: "capitalize",
      display: "flex",
      padding: "10px 40px",
      alignItems: "flex-start"
    },
  }))

  const { classes } = useStyle();

  return (
        <Box
          className={classes.modal}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider', display: "flex", justifyContent: "space-between", width: "270px", textAlign: "start" }}
          >
            <Tab label="General" sx={{marginTop: "88px"}} {...a11yProps(0)} className={classes.tabText} />
            <Tab label="Project" {...a11yProps(1)} className={classes.tabText}/>
            <Tab label="Achievement" {...a11yProps(2)} className={classes.tabText}/>
            <Tab label="Work Experince" {...a11yProps(3)} className={classes.tabText}/>
            <Tab label="Education" {...a11yProps(4)} className={classes.tabText}/>
            <Tab label="Contact" {...a11yProps(5)} className={classes.tabText}/>
          </Tabs>
          <TabPanel value={value} index={0}>
            <GeneralTab/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Project />
          </TabPanel>
      <TabPanel value={value} index={2}>
        <Achievement/>
          </TabPanel>
      <TabPanel value={value} index={3}>
        <WorkExperience/>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Education/>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <Contact/>
          </TabPanel>
        </Box>
  );
}