import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBarComponent from './Components/NavBarComponent';
import reportWebVitals from './reportWebVitals';
import MainPage from './Pages/MainPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/08122008",
    element: <div>Hello world!</div>,
  },
  {
    path: "/",
    element: <MainPage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBarComponent />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
