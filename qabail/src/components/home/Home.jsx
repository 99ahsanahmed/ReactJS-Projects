import React from 'react'
import Navbar from '../navbar/Navbar'
import Card from '../card/card' 
import {Link} from 'react-router-dom'
import './Home.css'


const Home = () => {
  return (
   <>
      <Navbar/>

    <div className='top'>   
      <Link to='/shabab' > 
      <Card title = "Qabila Abu-Bakr"  description = "This is a Qabila amongst many other Qabails of Karachi. It covers a specific part of Gulistan-e-Jauhar"/> </Link>
    </div>

    <ul className='dept'>
        <li> <Link  > <Card  title = "Shabab Al-Burhan"  description = "" /></Link></li> 

      <li><Link to='' >  <Card title = "Atfaal Al-Burhan"  description = "" /></Link></li>

      <li><Link to=''>   <Card title = "Seerat Circle"  description = "" /></Link></li>
    </ul>
    </>
  )
}

export default Home