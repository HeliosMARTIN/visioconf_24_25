import React from "react"
import "../styles/pages/discussionsPage.scss"

const DiscussionsPage: React.FC = () => {
    return (
        <div className="discussions-page">
            <h1>Liste des discussions :</h1>
            <div className="discussion-list">
                {/* Example discussion items */}
                <div className="discussion-item">
                    <span className="discussion-title">Discussion 1</span>
                    <span className="discussion-date">01/01/2023</span>
                </div>
                <div className="discussion-item">
                    <span className="discussion-title">Discussion 2</span>
                    <span className="discussion-date">02/01/2023</span>
                </div>
            </div>
        </div>
    )
}

export default DiscussionsPage
