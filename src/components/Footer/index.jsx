import logo from '/Users/vadimanastasia/Desktop/Anastasia_Kasa_20240411/src/assets/logo-white.png'
import './index.scss'
function Footer() {
return(
    <footer>
        <img src={logo} alt="Logo-Kasa" className="kasa-logo"/>
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
)

}
export default Footer