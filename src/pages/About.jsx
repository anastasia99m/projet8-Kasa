import montagnes from '../assets/montagnes.png'
import './About.scss'
import Collapse from '../components/Collapse';
import arrowBackImage from '/Users/vadimanastasia/Desktop/Anastasia_Kasa_20240411/src/assets/Vector.png';

function About(){
    return(
        <main>
            <div className='container'>
                <img src={montagnes} alt="kasa-montagnes" className="kasa-montagnes"/>
            </div>

            <div className='collapse-list'>
                {/*<h1>Fiabilité</h1>*/}
                <Collapse
                    title="Fiabilité"
                    content={<p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'</p>}
                    arrowImage={arrowBackImage}
                />
                <Collapse
                    title="Respect"
                    content={<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'</p>}
                    arrowImage={arrowBackImage}                
                />
                <Collapse
                    title="Service"
                    content={<p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>}
                    arrowImage={arrowBackImage}
                />
                <Collapse
                    title="Sécurité"
                    content={<p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>}
                    arrowImage={arrowBackImage}
                />
            </div>
        </main>
    )
}
export default About