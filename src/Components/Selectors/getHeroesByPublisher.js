import { heroes } from "../../Data/heroes"


export const getHeroesByPublisher=(publisher)=>{

    const validPublisher = ['DC Comics','Marvel Comics'];

    if (!validPublisher.includes(publisher))
    {
        throw new Error("Ivalido");
    }
    return heroes.filter( hero => hero.publisher === publisher);

}