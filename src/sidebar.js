import React from "react"

export class Sidebar extends React.Component
{
    render()
    {
        return (
            <div className="sidebar">
                <a type="button" href="index.html"><img id="home_img" src={require("./assets/home.png")} alt="home"/> </a>
                <a type="button" href="index.html"><img id="brief_img" src={require("./assets/brief.png")} alt="home"/> </a>
                <a type="button" href="index.html"><img id="home_img" src={require("./assets/home.png")} alt="home"/> </a>
                <a type="button" href="index.html"><img id="home_img" src={require("./assets/home.png")} alt="home"/> </a>
            </div>
        )
    }
}