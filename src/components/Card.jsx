import React from 'react'

export default function Card() {
    return (
        <div className="card">
            <img className='card--img' src="../img/thailand.jpeg" alt="location-img" />
            <div className="card--details">
                <p className="card--location">
                    <i class="ri-map-pin-fill"></i>COUNTRY
                    <span className="card--maps"><a href="#">View on Google Maps</a></span>
                </p>
                <h1>Bangkok</h1>
                <p className="card--date">01 Jan, 2021 - 02 Jan, 2021</p>
                <p className="card--description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, natus amet hic dolores dolorum id accusamus numquam perferendis aut culpa repellat voluptatum officiis dicta nam quaerat! Reiciendis deserunt a animi.</p>
            </div>
        </div>
    )
}