import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import HomePage from "./pages/HomePage"

const isAuthenticated = () => {
    const token = localStorage.getItem("token")
    return token !== null
}

const App: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={
                        isAuthenticated() ? (
                            <HomePage />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </div>
    )
}

export default App
