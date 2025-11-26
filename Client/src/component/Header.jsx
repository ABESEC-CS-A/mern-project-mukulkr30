import logo from "../assets/TFlogO.png";
import './Header.css'
export default function Header(){
    
    return(
        <div  >
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">
                <img src={logo} alt="" width="60" height="60"/>
                </a>
           
            <form  className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <i class="bi bi-person-circle" ></i>
            </div> 
        </nav>
        </div>
    )
}