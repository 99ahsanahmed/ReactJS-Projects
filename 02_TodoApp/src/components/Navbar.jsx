import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-500 text-white py-2' >

        <div className='logo' >
            <span>My-Todo</span>
        </div>

        <div className="list ">
            <ul className='flex gap-5'>
                <li className='font-bold' >Home</li>
                <li className='font-bold' >About Us</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar