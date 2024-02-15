import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo3bg.png'
import {FaBars} from "react-icons/fa"
import {AiOutlineClose} from "react-icons/ai"

const Header = () => {
  const[isNavShowing,setIsNavShowing] = useState(window.innerWidth > 800 ? true: false );
  
  const closeNavHndler =() => {
    if(window.innerWidth<800){
      setIsNavShowing(false);

    }else{
      setIsNavShowing(true)
    }
  }
  
  return (
    <nav>
       <div className="container nav_container">
        <Link to="/" className='nav_logo'onClick={closeNavHndler}>
            <img src ={Logo} alt ="Navbar Logo"  />
        </Link>
        {isNavShowing && <ul className="nav_menu">
          <li><Link to ='/profile' onClick={closeNavHndler}>Nimsara Liyanage</Link></li>
          <li><Link to = "/create" onClick={closeNavHndler}>Create Post   </Link></li>
          <li><Link to = "/authors"onClick={closeNavHndler}>Authors  </Link></li>
          <li><Link to = "/logout" onClick={closeNavHndler}>Logout </Link></li>
        </ul>}
             <button className="nav_toggle-btn" onClick={()=>setIsNavShowing(!isNavShowing)}>
                  {isNavShowing ? <AiOutlineClose/> : <FaBars/>
}

             </button>
       </div>
    </nav>
  )
}

export default Header