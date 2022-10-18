import React from "react"
import  "./navbar.css"
const Navbar = () =>
{
    render()
    return(
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/home" activeStyle>
                        home
                    </NavLink>
                    <NavLink to="/briefing" activeStyle>
                        briefing
                    </NavLink>
                    <NavLink to="/home" activeStyle>
                        home
                    </NavLink>
                    <NavLink to="/home" activeStyle>
                        home
                    </NavLink>
                    <NavLink to="/settings" activeStyle>
                        settings
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
}

export default Navbar;