import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProfilePage from "./pages/ProfilePage"
import PortfolioPage from './pages/PortfolioPage';
function App() {
  return (
    <BrowserRouter>      
      <div className="App">
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
