import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import ProjectsPage from './pages/ProjectsPage';
import SpotlightPage from './pages/SpotlightPage';
import { Global } from '@emotion/react';
function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Main />} />
            <Route
              path="/projects"
              element={<ProjectsPage />} />
            <Route
              path="/spotlight/:id"
              element={<SpotlightPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
