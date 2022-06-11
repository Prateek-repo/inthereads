import React from 'react'
import Link from "next/link";
import Image from "next/image";
import navStyles from '../styles/Navbar.module.css'


const Navbar = () => {
  return (
    <nav className={navStyles.navbar}>
        <ul> 
          <Link href={'/'}><a><li>In The Reads</li></a></Link>
          <Link href={'/blog'}><a><li>Blog</li></a></Link>
          <Link href={'/about'}><a><li>About</li></a></Link>
          <Link href={'/contact'}><a><li>Contact Us</li></a></Link>
        </ul>
      </nav>
  )
}

export default Navbar