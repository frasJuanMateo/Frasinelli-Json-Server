import { useState, useEffect } from 'react'

function SearchBar({ data }) {
    return (
        <>
            <label>
                Filtrar:<input style={{width:"min-content"}} name='search' type="text" />
            </label>
        </>
    )
}

export default SearchBar