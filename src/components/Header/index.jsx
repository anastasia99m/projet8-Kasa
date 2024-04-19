import logo from '/Users/vadimanastasia/Desktop/Anastasia_Kasa_20240411/src/assets/logo.png'
import './index.scss'
import { NavLink } from 'react-router-dom'

function Header(){
   
    return(
        <header>
            <img src={logo} alt="Logo-Kasa" className="kasa-logo"/>
            <div className="navBar">
                <NavLink to='/' activeClassName="active-link">
                    Accueil
                </NavLink>
                <NavLink to='/about' activeClassName="active-link">
                    A Propos
                </NavLink>
            </div>
        </header>
    )
}
export default Header