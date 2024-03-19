import React from 'react'

export default function Card(props) {
    return (
        <>
            <div className="card">
                <img className='card--img' src={`../img/${props.item.imageSrc}`} alt="location-img" />
                <div className="card--details">
                    <p className="card--location">
                        <i class="ri-map-pin-fill"></i>{props.item.location}
                        <span className="card--maps"><a href={props.item.googleMapsUrl}>View on Google Maps</a></span>
                    </p>
                    <h1>{props.item.title}</h1>
                    <p className="card--date">{props.item.date}</p>
                    <p className="card--description">{props.item.description}</p>
                </div>
            </div>
            <div className="line--break"></div>
        </>
    )
}