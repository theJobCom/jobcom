import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ProfilePage from "./pages/ProfilePage"

function App() {
  return (
    <BrowserRouter>      
      <div className="App">
        <Routes>
          <Route path="/" element={<ProfilePage/>} exact>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
