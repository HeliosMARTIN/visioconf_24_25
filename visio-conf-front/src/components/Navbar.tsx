import React from "react"
import { Link } from "react-router-dom"
import "../styles/components/navbar.scss"

const Navbar: React.FC = () => {
    return (
        <div className="navbar">
            <Link to="/">Accueil</Link>
            <Link to="/">Page 1</Link>
            <Link to="/">Page 2</Link>
            <Link to="/">Page 3</Link>
            <Link to="/account">Compte</Link>
        </div>
    )
}

export default Navbar
