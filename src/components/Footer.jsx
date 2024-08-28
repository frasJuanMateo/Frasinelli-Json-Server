import { useState, useEffect } from 'react'

function Footer({ data }) {
    return (
        <>
            <footer style={{backgroundColor:"black", position:"absolute", minWidth:"100%"}}>
                <p style={{color:"white"}} class="copyright-text">Copyright &copy; 2017 All Rights Reserved by: <a href="#">Instituto Tecnico Renault</a>.</p>
            </footer>
        </>
    )
}

export default Footer