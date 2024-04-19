import './Error.scss'
import { NavLink } from 'react-router-dom'

function Error(){
    return(
        <main>
            <div className='error-code'>404</div>
            <div className='error-txt'>Oups! La page que vous demandez n'existe pas.</div>
            <NavLink to='/' activeClassName="active-link">
                Retourner sur la page d’accueil
            </NavLink>
        
        
        </main>
    )
}
export default Error 