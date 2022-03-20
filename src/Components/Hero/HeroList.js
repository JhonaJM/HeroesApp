import { useMemo } from 'react';
import { getHeroesByPublisher } from '../Selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    const heroes = useMemo( ()=> getHeroesByPublisher(publisher),[publisher]);
    
    return (
        <div className="row rows-cols-1 rows-md-3-1 g-3">
            <h1>{publisher}</h1>
            <hr/>
           
                {
                    heroes.map( hero =>(
                        <HeroCard {...hero} key={hero.id}/>
                    ))
                }

        </div>
    )
}
