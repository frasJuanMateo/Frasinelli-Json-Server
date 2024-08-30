import { useState, useEffect } from 'react'
import NavBar from './components/NavBar.jsx'
import Form from './components/Form.jsx'
import Table from './components/Table.jsx'
import Footer from './components/Footer.jsx'
import axios from 'axios';

function App() {
  const baseUrl = "http://localhost:3000/posts"
  const [table, setTable] = useState([]);
  const [search, setSearch] = useState("");
  const deletePost = (event) => {
    if (window.confirm("Seguro que queres eleminar este post?")) {
      axios.delete(`http://localhost:3000/posts/${event.target.value}`);
    }
  }

  const addPost = (post) => {
    axios.post(baseUrl, post)
    .then(() => alert("Se añadio el post"))
    .catch(error => {
      console.log(error);
    });
  }

  useEffect(() => {
    axios.get(baseUrl)
      .then(json => setTable(json.data))
      .catch(error => {
        console.log(error);
      });
  }, );
  
  return (
    <>
      <NavBar setSearch={setSearch}/>
      <Table data={table} deletePost={deletePost} search={search}/>
      <Form data={table} addPost={addPost}/>
      <Footer />
    </>
  )
}

export default App
