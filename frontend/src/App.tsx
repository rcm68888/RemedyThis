import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserProfilePage from './pages/UserProfilePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ChatbotPage from './pages/ChatbotPage';
import SearchPage from './pages/SearchPage';
import ForumPage from './pages/ForumPage';
import HealthGoalsPage from './pages/HealthGoalsPage';
import NearMePage from './pages/NearMePage';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<UserProfilePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/chatbot" element={<ChatbotPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/forum" element={<ForumPage />} />
            <Route path="/health-goals" element={<HealthGoalsPage />} />
            <Route path="/near-me" element={<NearMePage />} />
        </Routes>
    );
};

export default App;

