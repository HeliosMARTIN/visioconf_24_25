import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/pages/accountPage.scss"

const AccountPage: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
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
        localStorage.removeItem("token")
        navigate("/login", { replace: true })
    }

    return (
        <div className="account-page">
            <div className="user-card">
                {loading ? (
                    <div className="loading">Chargement...</div>
                ) : (
                    <>
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
                            <div
                                className="info-row"
                                style={{ justifyContent: "flex-end" }}
                            >
                                <a className="redirect-link" onClick={onLogout}>
                                    Déconnexion
                                </a>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default AccountPage
