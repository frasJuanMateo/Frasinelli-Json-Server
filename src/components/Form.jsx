import { useState, useEffect } from 'react'

function Form({ data, addPost }) {
    const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

    const [post, setPost] = useState({name: "", surname: "", age:"", phone_number:""});
    const handleSubmit = (event) => {
        event.preventDefault();
        if(phoneRegex.test(post.phone_number)) {
            addPost(post);
            setPost({name: "", surname: "", age:"", phone_number:""});
        }
        else {console.log("Numero invalido");}
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
                    <input name='name' type="text" value={post.name} onChange={handleChange} />
                </label>
                <label>
                    Apellido:
                    <input name='surname' type="text" value={post.surname} onChange={handleChange} />
                </label>
                <label>
                    Edad:
                    <input name='age' type="number" value={post.age} onChange={handleChange} />
                </label>
                <label>
                    Telefono:
                    <input name='phone_number' type="text" value={post.phone_number} onChange={handleChange} />
                </label>
                <input type="submit" value="Subir" />
            </form>
        </>
    )
}

export default Form