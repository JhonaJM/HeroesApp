import { useMemo } from 'react'
import { useParams,Navigate,useNavigate } from 'react-router-dom'
import { getHeroesById } from '../Selectors/getHeroesById';

export const HeroScreen = () => {

    const {heroeId}= useParams();
   

    const hero = useMemo(()=>getHeroesById(heroeId),[heroeId]) ;

    const navigate = useNavigate();
    const handleReturn =()=>{

        navigate(-1,{
            replace:false,
        });
    }
    if(!hero)
        return <Navigate to="/"/>

    
 

    const {
        id,
        superhero, 
        publisher, 
        alter_ego,
        first_appearance,
        characters

    }=hero;
    const ImagePath=`/Assets/${id}.jpg`

   
    return (
        <div className="row mt-5">
           <div className="col-4">
                <img src={ImagePath} alt={superhero} className="img-thumbnail" />
           </div>
            
           <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group"> 
                    <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b>publisher: </b>{publisher}</li>
                    <li className="list-group-item"><b>first Apperarance: </b>{first_appearance}</li>
                </ul>
                <h5>characters</h5>
                <p>{characters}</p>
                <button className="btn btn-outline-info"
                        onClick={handleReturn}>
                    Regresar
                </button>
           </div>
            
        </div>
    )
}
