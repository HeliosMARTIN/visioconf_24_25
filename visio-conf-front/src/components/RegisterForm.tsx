import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/components/registerForm.scss"

const RegisterForm: React.FC = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        phone: "",
        job: "",
        description: "",
    })
    const navigate = useNavigate()

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()

        try {
            const response = await fetch(
                "http://localhost:3000/auth/register",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                }
            )

            const data = await response.json()
            if (data.success) {
                navigate("/login")
            } else {
                console.error("Échec de l'inscription: ", data.error)
            }
        } catch (error) {
            console.error("Erreur:", error)
        }
    }

    return (
        <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="form-group">
                    <label>Prénom</label>
                    <input
                        type="text"
                        name="firstname"
                        placeholder="Ex: John"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Nom</label>
                    <input
                        type="text"
                        name="lastname"
                        placeholder="Ex: Doe"
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Ex: johndoe@example.com"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Mot de passe</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Ex: mySecure!Password123??"
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label>Téléphone</label>
                    <input
                        type="text"
                        name="phone"
                        placeholder="Ex: 0612345678"
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Emploi</label>
                    <input
                        type="text"
                        name="job"
                        placeholder="Ex: Développeur"
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className="form-group">
                <label>Description</label>
                <textarea
                    name="description"
                    placeholder="Décrivez-vous en quelques mots"
                    onChange={handleChange}
                    required
                />
            </div>

            <button type="submit">S'inscrire</button>
        </form>
    )
}

export default RegisterForm
