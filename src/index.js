import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Inicio from './routes/Inicio';
import NotFoundPage from './routes/NotFoundPage';
import * as bootstrap from 'bootstrap';
import StaysProvider from './context/StaysProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StaysProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Inicio />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </StaysProvider>
    </BrowserRouter>
  </React.StrictMode>
);
