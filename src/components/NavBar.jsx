import { useState, useEffect } from 'react'
import SearchBar from './SearchBar.jsx'
import Logo from '../assets/hampter.webp'

function NavBar({setSearch}) {
    return (
        <>
        <img src={Logo} style={{width:"200px", height:"100px", border: "2px solid #000000"}} />
        <SearchBar setSearch={setSearch}/>
        </>
    )
}

export default NavBar