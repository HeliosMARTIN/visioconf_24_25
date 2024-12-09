import React, { useState, useEffect } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import Navbar from "./components/Navbar"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import HomePage from "./pages/HomePage"
import AccountPage from "./pages/AccountPage"
import DiscussionsPage from "./pages/DiscussionsPage"
import GroupsPage from "./pages/GroupsPage"
import "./styles/app.scss"

const AuthenticatedApp: React.FC<{ onLogout: () => void }> = ({ onLogout }) => (
    <div className="app-container with-navbar">
        <Navbar />
        <div className="content">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/discussions" element={<DiscussionsPage />} />
                <Route path="/groups" element={<GroupsPage />} />
                <Route
                    path="/account"
                    element={<AccountPage onLogout={onLogout} />}
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    </div>
)

const UnauthenticatedApp: React.FC<{ onLogin: () => void }> = ({ onLogin }) => (
    <div className="app-container">
        <div className="content">
            <Routes>
                <Route
                    path="/login"
                    element={<LoginPage onLogin={onLogin} />}
                />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </div>
    </div>
)

const App: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

    useEffect(() => {
        const token = localStorage.getItem("token")
        setIsAuthenticated(token !== null)
    }, [])

    const handleLogin = () => {
        setIsAuthenticated(true)
    }

    const handleLogout = () => {
        localStorage.removeItem("token")
        setIsAuthenticated(false)
    }

    return isAuthenticated ? (
        <AuthenticatedApp onLogout={handleLogout} />
    ) : (
        <UnauthenticatedApp onLogin={handleLogin} />
    )
}

export default App
