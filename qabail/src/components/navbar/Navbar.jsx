import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className='navList' >
               <Link to='/' > <li>Home</li></Link>
                <Link to='/shabab' > <li>Qabila Abu Bakr</li> </Link>
                <li>Seerat</li>
                <li>Shabab</li>
                <li>Atfaal</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar