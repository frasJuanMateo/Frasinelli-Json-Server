import { useState, useEffect } from 'react'
import NavBar from './components/NavBar.jsx'
import Form from './components/Form.jsx'
import Table from './components/Table.jsx'
import Footer from './components/Footer.jsx'
import axios from 'axios';

function App() {
  const [table, setTable] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts")
    .then(json => setTable(json.data));
  }, []);

  return (
    <>
      <NavBar />
      <Form />
      <Table data={table} />
      <Footer />
    </>
  )
}

export default App
