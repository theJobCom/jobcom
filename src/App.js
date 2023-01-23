import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ApplicationForm from './pages/ApplicationForm';
import LoginPage from './pages/LoginPage';
import LoginTab from './pages/LoginPage';
import ProfilePage from "./pages/ProfilePage"
import PortfolioPage from './pages/PortfolioPage';
function App() {
  return (
    <BrowserRouter>      
      <div className="App">
        <Routes>
          <Route path="/" element={<PortfolioPage/>} exact>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
