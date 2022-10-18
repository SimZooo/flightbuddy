import React, {useEffect, useState} from 'react';
const airports = require("./resources/airports.json")

export function Metar(props)
{
    const [metar_data, setMetar] = useState("No valid metar")
    const [found, setFound] = useState(false)

    useEffect(() => 
        {
            if(airports.some(icao => icao === props.icao.toUpperCase()))
            {
                var xhr = new XMLHttpRequest();
                xhr.addEventListener("readystatechange", function () {
                    if (this.readyState === 4) {
                      success(JSON.parse(this.responseText));
                    }
                });

                xhr.open("GET", `https://api.checkwx.com/metar/${props.icao.toUpperCase()}`)
                xhr.setRequestHeader("X-API-KEY", "330dfffdb1a040679169a4f7b9")
                xhr.send()
                //setMetar(text.substring(text.lastIndexOf(props.icao), metar.length))
            }
    });

    function success(response)
    {
        setMetar("METAR " + response.data[0])
    }

    return <p name={props.name}>{metar_data}</p>;
}