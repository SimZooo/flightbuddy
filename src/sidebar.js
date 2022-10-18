import React from "react"
import  "./sidebar.css"
export class Sidebar extends React.Component
{
    render()
    {
        return (
            <div className="sidebar">
                <button id="main-button"> <img src={"./assets/home.svg"} alt="home" /></button>
                <button id="main-button"> <img src={"./assets/brief.png"} alt="brief" /></button>
                <button id="main-button"> <img src={"./assets/home.png"} alt="home" /></button>
                <footer id="sidebar-footer">
                    <button id="settings"> <img src={"./assets/settings.svg"} alt="settings" /></button>
                </footer>
            </div>
        )
    }
}