import React from "react"
import "../styles/pages/groupsPage.scss"

const GroupsPage: React.FC = () => {
    return (
        <div className="groups-page">
            <h1>Liste des groupes :</h1>
            <div className="group-list">
                {/* Example group items */}
                <div className="group-item">
                    <span className="group-title">Groupe 1</span>
                    <span className="group-date">01/01/2023</span>
                </div>
                <div className="group-item">
                    <span className="group-title">Groupe 2</span>
                    <span className="group-date">02/01/2023</span>
                </div>
            </div>
        </div>
    )
}

export default GroupsPage
