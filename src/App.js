import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route
            path="/"
            element={<Main/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
