import { useState, useEffect } from 'react'

function Form({ data }) {
    const [post, setPost] = useState({id:data.length + 1, name: "", surname: "", age:0, phone_number:""});
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(post);
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost({
            ...post,
            [name]: value
        });
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input name='name' type="text" onChange={handleChange} />
                </label>
                <label>
                    Apellido:
                    <input name='surname' type="text" onChange={handleChange} />
                </label>
                <label>
                    Edad:
                    <input name='age' type="number" onChange={handleChange} />
                </label>
                <label>
                    Telefono:
                    <input name='phone_number' type="text" onChange={handleChange} />
                </label>
                <input type="submit" value="Subir" />
            </form>
        </>
    )
}

export default Form