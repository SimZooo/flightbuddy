import React from "react"
import Metar from "./web.js"

class Info extends React.Component
{
  render()
  {
    return(
      <div className="info">
          <p>Callsign:</p>
        </div>
    )
  }
}

class Home extends React.Component
{
  constructor()
  {
    super()
    this.state =
    {
      departure_airport: "",
      arrival_airport: ""
    }

    this.onAirportChange = this.onAirportChange.bind(this)
  }

  onAirportChange(evt)
  {
    if(evt.target.name === "dep")
    {
      this.setState(
        {
          departure_airport: evt.target.value
        })
    }
    else{
      this.setState(
        {
          arrival_airport: evt.target.value
        })
    }
    this.forceUpdate();
  }

  render()
  {
    return (
      <div className="homepage">
        <Info />
        <div id="icao">
          <div id="dep">
            <label>Departure</label> <br/>
            <input name="dep" onBlur={this.onAirportChange}></input>
          </div>
          <div id="arr">
            <label>Arrival</label> <br/>
            <input name="arr" onBlur={this.onAirportChange}></input>
          </div>
          <div className="metar">
            <Metar icao={this.state.departure_airport} name="dep"/>
            <Metar icao={this.state.arrival_airport} name="arr"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;