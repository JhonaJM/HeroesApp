import { heroes } from "../../Data/heroes";

export const getHeroesById = (id ='')  =>{
    return heroes.find( hero=> hero.id === id);
}