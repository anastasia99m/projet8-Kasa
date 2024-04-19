import Collapse from '../components/Collapse/index.jsx';
import arrowBackImage from '/Users/vadimanastasia/Desktop/Anastasia_Kasa_20240411/src/assets/Vector.png';
import '/Users/vadimanastasia/Desktop/Anastasia_Kasa_20240411/src/pages/FicheLogement.scss'
import Carrousel from '../components/Carrousel/index.jsx';

function bannerPhoto(){
   
    return(
        
        <main>
            <div className='container-carrousel'>
                <Carrousel />
			</div>
            
            
            <div className='collapse-list'>
                <Collapse
                    title="Description"
                    content={<p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'</p>}
                    arrowImage={arrowBackImage}
                />
                <Collapse
                    title="Équipements"
                    content={<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'</p>}
                    arrowImage={arrowBackImage}                
                />
                
            </div>
         
        </main>
    )
}
export default bannerPhoto
