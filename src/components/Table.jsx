import { useState, useEffect } from 'react'
import axios from 'axios';

function Table({ data, deletePost, search }) {

    return (
        <div style={{margin:"5%"}}>
            <table>
                <tr>
                    <th><b>Nombre</b></th>
                    <th><b>Apellido</b></th>
                    <th><b>Edad</b></th>
                    <th><b>Telefono</b></th>
                    <th><b>Acciones</b></th>
                </tr>
                {data.filter(
                    (post) => search == ""
                    || post.name.toLowerCase().startsWith(search.toLowerCase())
                    || post.surname.toLowerCase().startsWith(search.toLowerCase())
                    || post.phone_number.toLowerCase().startsWith(search.toLowerCase())
                ).map(post => <tr>
                    <th>{post.name}</th>
                    <th>{post.surname}</th>
                    <th>{post.age}</th>
                    <th>{post.phone_number}</th>
                    <th><button value={post.id} onClick={deletePost}>Borrar</button></th>
                </tr>)}
            </table>
        </div>
    )
}

export default Table