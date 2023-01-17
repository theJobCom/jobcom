import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';


function App() {
  return (
    <BrowserRouter>      
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage/>} exact>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
