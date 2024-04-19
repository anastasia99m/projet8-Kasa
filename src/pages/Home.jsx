import falaises from '/Users/vadimanastasia/Desktop/Anastasia_Kasa_20240411/src/assets/falaises.png'
import './Home.scss'
import  gallery  from '/Users/vadimanastasia/Desktop/Anastasia_Kasa_20240411/src/datas/gallery.json'
import Card from '/Users/vadimanastasia/Desktop/Anastasia_Kasa_20240411/src/components/Card/card.jsx'

function Home(){
    return(
        <main>
            <div className='container'>
                <img src={falaises} alt="kasa-falaises" className="kasa-falaises"/>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            
            <ul className='container-gallery'>
				{gallery.map(({ id, cover, title}) => (
					<Card
                        id={id}
						cover={cover}
						title={title}
					/>
				))}
			</ul>
                 
         
        </main>
    )
}
export default Home