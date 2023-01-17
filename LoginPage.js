import React from 'react'
import { Tabs, Tab } from '@mui/material';
import { Container, Box } from '@mui/system'
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';

const LoginPage = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }


  return (
    <Container variant="div">
      <Box>
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
    </Container>
  )
}

export default LoginPage