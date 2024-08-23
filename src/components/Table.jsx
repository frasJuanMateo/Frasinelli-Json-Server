import { useState, useEffect } from 'react'

function Table({data}) {
    return (
        <>
            <table>
                <tr>
                    <th><b>Nombre</b></th>
                    <th><b>Apellido</b></th>
                    <th><b>Edad</b></th>
                    <th><b>Telefono</b></th>
                    <th><b>Acciones</b></th>
                </tr>
                {data.map(post => <tr>
                    <th>{post.name}</th>
                    <th>{post.surname}</th>
                    <th>{post.age}</th>
                    <th>{post.phone_number}</th>
                    <th><button>Borrar</button></th>
                </tr>)}
            </table>
        </>
    )
}

export default Table