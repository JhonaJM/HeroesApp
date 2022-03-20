import { Routes,Route } from "react-router-dom";
import { Navbar } from "../Components/UI/Navbar"
import { MarvelScreen } from "../Components/Marvel/MarvelScreen";
import { DcScreen } from "../Components/Dc/DcScreen";
import { SearchScreen } from "../Components/Search/SearchScreen";
import { HeroScreen } from "../Components/Hero/HeroScreen";


export const DashBoardRoutes = () => {
    return (
        <>
           <Navbar/>
           <div className="container">
                 <Routes>
                    <Route path="/" element={<MarvelScreen/>} />
                    <Route path="/marvel" element={<MarvelScreen/>} />
                    <Route path="/dc" element={<DcScreen/>} />
                    <Route path="/search" element={<SearchScreen/>} /> 
                    <Route path="/hero/:heroeId" element={<HeroScreen/>} />            
                </Routes> 
           </div>
           
        </>
    )
}
