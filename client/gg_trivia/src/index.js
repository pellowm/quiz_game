import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
//import GameHistory from "./views/gameHistory";
//import ChampionHistory from "./views/championHistory";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Login from './views/Logout';
import Game from './views/Game';
import Layout from "./views/Layout";
import NoPage from "./views/NoPage";
import UserHistory from "./views/UserHistory";
import Leaderboard from "./views/Leaderboard";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/history" element={<UserHistory />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="*" element={<NoPage />} />
        </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
