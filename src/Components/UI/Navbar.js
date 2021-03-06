import React, { useContext } from 'react'
import { Link, NavLink,useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Auth/AuthContext';
import { Types } from '../../Types/Types';

export const Navbar = () => {

    const {user} = useContext(AuthContext);
    
    const {dispatch} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout=()=>{

        const action  = {
            type : Types.logout,
        }
        dispatch(action);
        navigate("/login",{
            replace:true,
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                       
                        className={ ({isActive}) => "nav-item nav-link " + ( isActive ? "Active" :"") }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                       
                       className={ ({isActive}) => "nav-item nav-link " + ( isActive ? "Active" : "") }
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                       
                       className={ ({isActive}) => "nav-item nav-link " + ( isActive ? "Active" : "") }
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-info">{user.name}</span>
                    <button
                        className="nav-item nav-link btn" 
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}