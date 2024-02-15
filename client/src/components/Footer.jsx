import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <ul className="footer_categories">
      <li><Link to="/posts/categories/Science" >Science</Link></li>
      <li><Link to="/posts/categories/Maths" >Maths</Link></li>
      <li><Link to="/posts/categories/English" >English</Link></li>
      <li><Link to="/posts/categories/Commerce" >Commerce</Link></li>
      <li><Link to="/posts/categories/IT" >IT</Link></li>
      <li><Link to="/posts/categories/Art" >Art</Link></li>
      <li><Link to="/posts/categories/Sinhala">Sinhala</Link></li>
      <li><Link to="/posts/categories/History" >History</Link></li>

      </ul>
      <div className="footer_copyright">
          <small>All Rights Reserved &copy;Copyright,Nimsara Liyanage</small>
      </div>
    </footer>
  )
}

export default Footer