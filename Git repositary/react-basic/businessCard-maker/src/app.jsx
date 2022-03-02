import React from 'react';
import styles from './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App({ FileInput, authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login authService={authService} />}></Route>
          <Route
            path="/maker"
            element={<Maker FileInput={FileInput} authService={authService} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
