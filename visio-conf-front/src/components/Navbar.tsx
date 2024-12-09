import React from "react"
import { Link } from "react-router-dom"
import "../styles/components/navbar.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

const Navbar: React.FC = () => {
    return (
        <div className="navbar">
            <Link to="/">Accueil</Link>
            <Link to="/discussions">Discussions privées</Link>
            <Link to="/groups">Groupes</Link>
            <button className="create-discussion-btn">
                <FontAwesomeIcon icon={faPlus} /> Nouveau
            </button>
            <Link to="/account">Compte</Link>
        </div>
    )
}

export default Navbar
