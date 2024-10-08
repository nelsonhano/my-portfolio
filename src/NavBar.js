import { HiMenu} from 'react-icons/hi'
const NavBar = () =>{
    return(
     <nav className="navbar">
        <h3>BusayomiTech<span className="dot">.</span></h3>
     <div className="links">
         <a href="#home" className='home-link'>Home</a>
         <a href="#project">Projects</a>
         <a href="#about">About</a>
         <a href="/contact">Contact</a>
         {/* <a href="/services">Services</a> */}
     </div>
     <div className="menu-btn">
        <HiMenu size={25} />
        </div>
     
        </nav>
    )
}
export default NavBar