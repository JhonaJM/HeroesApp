import { useNavigate,useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useMemo } from 'react';

import { HeroCard } from '../Hero/HeroCard';
import { useForm } from '../Hooks/UseForm'
import { getHeroesByName } from '../Selectors/getHeroesByName';


export const SearchScreen = () => {

    
    const navigate = useNavigate();
    const location = useLocation();

    
    const {q=''} = queryString.parse(location.search);    

     const [formValues, handleInputChange] = useForm({
         searchText:q,
     });

     const { searchText } = formValues;

     const HeroesFiltered = useMemo( ()=> getHeroesByName(q),[q]);
     //const HeroesFiltered = getHeroesByName(q);

    const handleSearch = (e) =>{
        e.preventDefault();
       navigate(`?q=${searchText}`)

    }
    return (
        <>
            <h1>Busquedas</h1>
            <hr/>
            <div className="row">
                <div className="col-5"> 
                    <h4>Buscar</h4>
                    <hr/>
                    <form onSubmit={handleSearch}>
                        <input 
                            type="text"
                            placeholder="buscar heroe"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <button 
                            type="submit"
                            className="btn btn-outline-primary mt-1"> 
                            Buscar...
                        </button>
                    </form>
                </div>
                <div className="col-7" >
                    <h4>Resultado</h4>
                    <hr/>
                    {
                        (q ==='')
                            ? <div className="alert alert-info">Buscar Heroe</div>
                            : (HeroesFiltered.length === 0)
                                && <div className="alert alert-danger">No hay resultados de :  {q}</div>

                    }
                    {
                        HeroesFiltered.map(hero=>(
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))

                    }
                </div>
            </div>
        </>
    )
}
