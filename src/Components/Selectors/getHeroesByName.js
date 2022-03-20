import { heroes } from "../../Data/heroes";

export const getHeroesByName = (name='')=>{

console.log(name);

    if(name === '')
        return [];

    //name=name.toLowerCase();
    return heroes.filter( hero => hero.superhero.includes( name.charAt(0).toUpperCase() +  name.substr(1).toLowerCase()));

}
