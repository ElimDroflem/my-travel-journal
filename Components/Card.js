import React from "react"

export default function Card(props) {
    return(
        <div className="card">
            <img src={props.items.imageUrl} className="card--img"/>
            <div className="card--text">
                <div className="card--location">
                    <i className="fa-solid fa-location-dot"></i>
                    <h3>{props.items.location}</h3>
                    <a href={props.items.googleMapsUrl}><p className="grey">View on Google Maps</p></a>
                </div>
                <h2 className="card--title">{props.items.title}</h2>
                <p className="card--dates" >{props.items.startDate} - {props.items.endDate}</p>
                <p className="card--description">{props.items.description}</p>
            </div>
        </div>
    )
}
