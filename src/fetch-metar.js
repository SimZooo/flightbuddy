import React from 'react';
import App from './App';
const airports = require("./resources/airports.json")

export async function fetchMetar(airportIcao)
{
    airportIcao = airportIcao.toUpperCase()
    var found = false;
    airports.filter(function(icao)
    {
        if(icao === airportIcao.toUpperCase())
        {
            found = true;
        }
    })

    var metar = await fetch(`https://api.met.no/weatherapi/tafmetar/1.0/metar?icao=${airportIcao}`)
        .then(response => response.text())
        .then(text => {return text})
        .catch(error => console.log("Invalid airport"))
    var current = metar.substring(metar.lastIndexOf(airportIcao), metar.length)
    console.log(current);

    return metar;
}