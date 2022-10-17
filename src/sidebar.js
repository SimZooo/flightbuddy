import React from "react"

export class Sidebar extends React.Component
{
    render()
    {
        return (
            <div className="sidebar">
                <p> sidebar </p>
            </div>
        )
    }
}
export class ShoppingList extends React.Component
{
  render()
  {
    return(
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    )
  }
}