import { useState, useEffect } from 'react'

function SearchBar({ setSearch }) {
    const onChange = (event) => {setSearch(event.target.value)}
    return (
        <>
            <label>
                Filtrar:<input style={{width:"min-content"}} name='search' type="text" onChange={onChange}/>
            </label>
        </>
    )
}

export default SearchBar