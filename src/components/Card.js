import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <img src={`../images/${props.imageUrl}`} alt="" className="card--img" />
            <div className="card-info">
                <div className="card--top">
                    <img src="../images/pin-icon.png" alt="" className="pin--icon" />
                    <h6 className="country">{props.location}</h6>
                    <a href={props.googleMapsUrl} className="google--url">View on Google Maps</a>
                </div>
                <h2 className="city">{props.title}</h2>
                <h4 className="dates">{props.startDate} - {props.endDate}</h4>
                <p className="description">{props.description}</p>

            </div>
        </div>
    )
}