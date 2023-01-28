import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProfilePage from "./pages/ProfilePage"
import PortfolioPage from './pages/PortfolioPage';
import AlertBox from './components/Alert';
import PrivateRoute from './privateRoute/PrivateRoute';
function App() {
  return (
    <BrowserRouter>      
      <div className="App">
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
