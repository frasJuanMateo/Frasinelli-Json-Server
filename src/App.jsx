import { useState, useEffect } from 'react'
import NavBar from './components/NavBar.jsx'
import Form from './components/Form.jsx'
import Table from './components/Table.jsx'
import Footer from './components/Footer.jsx'
import axios from 'axios';

function App() {
  const baseUrl = "http://localhost:3000/posts"
  const [table, setTable] = useState([]);

  const deletePost = (event) => {
    axios.delete(`http://localhost:3000/posts/${event.target.value}`);
  }

  const addPost = (post) => {
    axios.post(baseUrl, post)
    .catch(error => {
      console.log(error);
    });
  }

  useEffect(() => {
    axios.get(baseUrl)
      .then(json => setTable(json.data));
  }, );

  return (
    <>
      <NavBar />
      <Form data={table} addPost={addPost}/>
      <Table data={table} deletePost={deletePost} />
      <Footer />
    </>
  )
}

export default App
