import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/pages/homePage.scss"

const HomePage: React.FC = () => {
    const [user, setUser] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const getProfilePicture = (picture: string) => {
        return picture
            ? `./src/assets/img/${picture}`
            : "./src/assets/img/default_avatar.png"
    }

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem("token")
            if (!token) {
                navigate("/login")
                return
            }

            try {
                const response = await fetch("http://localhost:3000/init", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                const data = await response.json()
                setUser(data)
                setLoading(false)
            } catch (error) {
                console.error("Erreur:", error)
                navigate("/login")
            }
        }

        fetchUserData()
    }, [navigate])

    const handleLogout = () => {
        localStorage.removeItem("user")
        navigate("/login")
    }

    if (loading) {
        return <div>Chargement...</div>
    }

    return (
        <div className="home-page">
            <h1>Bienvenue sur VisioConf, {user.firstname}!</h1>
            <div className="user-card">
                <img
                    src={getProfilePicture(user.picture)}
                    alt="Profile"
                    className="profile-picture"
                />
                <div className="user-info">
                    <div className="info-row">
                        <p>
                            <strong>Prénom:</strong> {user.firstname}
                        </p>
                        <p>
                            <strong>Nom:</strong> {user.lastname}
                        </p>
                    </div>
                    <div className="info-row">
                        <p>
                            <strong>Email:</strong> {user.email}
                        </p>
                        <p>
                            <strong>Téléphone:</strong> {user.phone}
                        </p>
                    </div>
                    <div className="info-row">
                        <p>
                            <strong>Emploi:</strong> {user.job}
                        </p>
                        <p>
                            <strong>Description:</strong> {user.desc}
                        </p>
                    </div>
                </div>
            </div>
            <button onClick={handleLogout}>Déconnexion</button>
        </div>
    )
}

export default HomePage
