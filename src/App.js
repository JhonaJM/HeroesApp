import { useEffect, useReducer } from "react"
import { AuthContext } from "./Auth/AuthContext"
import { AuthReducer } from "./Auth/AuthReducer"
import { AppRouter } from "./Routers/AppRouter"

const init = () => {
    return JSON.parse( localStorage.getItem('user') )|| {logged:false};

    

}
export const App = () => {

    const [user,dispatch] = useReducer(AuthReducer,{},init);
    useEffect(() => {
        if(!user) return;
        localStorage.setItem('user',JSON.stringify(user));
    },[ user ]);
    
    return (
        <AuthContext.Provider value={{
            user,
            dispatch
        }}>
        <AppRouter/>
        </AuthContext.Provider>
    )
}