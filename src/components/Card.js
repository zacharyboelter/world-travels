import React from "react";

export default function Card(props){
    return (
        <div className="card">
            <img src={`../images/${props.imageUrl}`} alt="" className="card--img"/>
            <div className="card-info">
                <img src="../images/pin-icon.png" alt="" className="pin--icon"/>
                
            </div>
        </div>
    )
}