import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProfilePage from "./pages/ProfilePage"
import PortfolioPage from './pages/PortfolioPage';
import AlertBox from './components/Alert';
function App() {
  return (
    <BrowserRouter>      
      <div className="App">
        <AlertBox/>
        <Routes>
          <Route path="/" element={<LoginPage />} exact/>
          <Route path="/profilepage" element={<ProfilePage/>} exact/>
          <Route path="/portfolioPage" element={<PortfolioPage/>} exact/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
