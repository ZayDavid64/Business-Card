import companyLogo from "./Silk.png";
import logo from "./1.png"
import "./Nav.css"

function NavBar(){
    return(
    <div className="top">
       <img className="logos" alt="" src={logo}></img>
       <h1>The Silk Collective</h1>
       <p className="comp-desc">Apparel Company</p>
        <p>thesilkcollective.com</p>
        <div>
            <button>Visit Our Website</button>
        </div>
    </div>
    )
}

export default NavBar;