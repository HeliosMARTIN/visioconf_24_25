import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/pages/homePage.scss"

const HomePage: React.FC = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            navigate("/login", { replace: true })
        }
    }, [navigate])

    return (
        <div className="home-page">
            <h1>Bienvenue sur VisioConf!</h1>
        </div>
    )
}

export default HomePage
