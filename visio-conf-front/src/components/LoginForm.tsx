import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/components/loginForm.scss"

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()

        try {
            const response = await fetch("http://localhost:3000/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            })

            const data = await response.json()
            if (data.success) {
                localStorage.setItem("token", data.token)
                navigate("/")
            } else {
                console.error("Connexion échouée: ", data.message)
            }
        } catch (error) {
            console.error("Erreur:", error)
        }
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    placeholder="Ex: johndoe@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label>Mot de passe</label>
                <input
                    type="password"
                    value={password}
                    placeholder="Entrez votre mot de passe"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <button type="submit">Se connecter</button>
        </form>
    )
}

export default LoginForm
