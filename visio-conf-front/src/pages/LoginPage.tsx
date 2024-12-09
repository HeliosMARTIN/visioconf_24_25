import React from "react"
import LoginForm from "../components/LoginForm"
import { useNavigate } from "react-router-dom"
import "../styles/pages/loginPage.scss"

const LoginPage: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
    const navigate = useNavigate()

    return (
        <div className="login-page">
            <h1>Connexion</h1>
            <LoginForm onLogin={onLogin} />
            <div className="redirect-container">
                <p>Vous n'avez pas de compte?</p>
                <a href="/register" className="redirect-link">
                    Inscrivez-vous ici
                </a>
            </div>
        </div>
    )
}

export default LoginPage
