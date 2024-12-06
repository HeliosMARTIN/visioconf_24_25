import React from "react"
import RegisterForm from "../components/RegisterForm"
import { useNavigate } from "react-router-dom"
import "../styles/pages/registerPage.scss"

const RegisterPage: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className="register-page">
            <h1>Inscription</h1>
            <RegisterForm />
            <div className="redirect-container">
                <p>Vous avez déjà un compte?</p>
                <a href="/login" className="redirect-link">
                    Connectez-vous ici
                </a>
            </div>
        </div>
    )
}

export default RegisterPage
