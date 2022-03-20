import React from 'react'
import {Link} from 'react-router-dom'

export const HeroCard = (
    { 
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    }) => {
    return (
        <div className="col-sm-5">
             <div className="card">
               <div className="row no-gutters">
                    <div className="col-4">
                        <img src={`/Assets/${id}.jpg`} className="card-img-top" alt={superhero} />
                    </div>
                    <div className="col-8">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        {
                            (alter_ego  !== characters) &&
                            <p className="text-muted">{characters}</p>
                        }
                        <p className="text-muted">{first_appearance}</p>
                        <Link to={`/hero/${id}`} >
                            Más...
                        </Link>
                    </div>
                   
                </div>     
            </div>
        </div>
    )
}
