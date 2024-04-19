import '/Users/vadimanastasia/Desktop/Anastasia_Kasa_20240411/src/components/Card/card.scss'
import { NavLink } from 'react-router-dom'

function Card({ id, title, cover }) {
    return (
      <li className="cardLocation">
        <NavLink to={`/fiche/${id}`}>    
          <img src={cover} alt="freelance" />
          <span>{title}</span>
        </NavLink>
      </li>
    )
  }

  export default Card