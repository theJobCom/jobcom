import React from 'react'
import { Tabs, Tab } from '@mui/material';
import { Container, Box } from '@mui/system'
import { makeStyles } from 'tss-react/mui';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import LoginTab from '../components/LoginTab';
import SignUpTab from '../components/SignUpTab';

const LoginPage = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }


  const useStyle = makeStyles()((theme) => ({
    container: {
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    boxLeft: {
      width: "70vw",
      backgroundColor: "black",
      height: "100%"
    },
    boxRight: {
      width: "500px",
      display: "flex",
      alignItems: "center",
    },
    tab: {
      width: "400px",
      padding: "5px",
      boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.23)",
      borderRadius: "10px"
    },
  }))

  const { classes } = useStyle();

  return (
    <div className={classes.container}>
      <Box className={classes.boxLeft}>
      </Box>
      <Box className={classes.boxRight}>
        <Box className={classes.tab}>
          <TabContext value={value}>
            <Box>
              <Tabs value={value} onChange={handleChange} textColor="secondary" indicatorColor='secondary' centered>
                <Tab label="login" value="1" />
                <Tab label="sign up" value="2"/>
              </Tabs>
            </Box>
            <TabPanel value="1"><LoginTab/></TabPanel>
            <TabPanel value="2"><SignUpTab/></TabPanel>
          </TabContext>
        </Box>
      </Box>
    </div>
  )
}

export default LoginPage