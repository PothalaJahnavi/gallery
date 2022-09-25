import React from 'react'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import axios from 'axios';
import Gallery from './Gallery';
const apiKey="465507ed247c2565ac6e744c34af9206";

export default function App() {
  const [data,setData] = useState([]);
  const[search,setSearch]=useState(null);
  function handleChange(e){
    setSearch(e.target.value);
  }
  function handleSubmit(e){
     e.preventDefault();
     axios
     .get(
       `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
     )
     .then(response => {
      console.log(response.data.photos.photo)
       setData(response.data.photos.photo)
     })
     .catch(error => {
       console.log(
         "Encountered an error with fetching and parsing data",
         error
       );
   })
  }
  return (
    <Section>
      <h1>IMAGE GALLERY</h1>
      <Form onSubmit={handleSubmit} className="for-form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter name" value={search} onChange={handleChange} autoComplete="off"/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> 
    <br></br>
    {data.length>=1?<Gallery data={data}/>:<h4>No Image Loaded</h4>}
    </Section>
  )
}
const Section=styled.section`
background-color: aliceblue;
h1{
  margin-top:3%;
  text-align: center;
  font-family:'Times New Roman', Times, serif;
  font-weight:800;
  color:darkblue;
}
h4{
  text-align: center; 
}
.for-form{
  margin-left:35%;
  margin-top:3%;
  width:30%;
  align-items: center;
  text-align: center;
}
`