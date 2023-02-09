import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProfilePage from "./pages/ProfilePage"
import PortfolioPage from './pages/PortfolioPage';
import AlertBox from './components/Alert';
import PrivateRoute from './privateRoute/PrivateRoute';
import { makeStyles } from 'tss-react/mui';
function App() {

  const useStyle = makeStyles()(() => ({
    app: {
      overflowX: "hidden"
    }
  }))

  const { classes } = useStyle();

  return (
    <BrowserRouter>      
      <div className={classes.app}>
        <AlertBox/>
        <Routes>
          <Route path="/" element={<LoginPage />} exact/>
          <Route path="/profilepage" element={<PrivateRoute><ProfilePage/></PrivateRoute>} exact/>
          <Route path="/portfolioPage" element={<PrivateRoute><PortfolioPage/></PrivateRoute>} exact/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
