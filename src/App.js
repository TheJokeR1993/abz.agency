import React from 'react';
import Card from './Component/card/Card';
import Form from './Component/form/Form';
import Header from './Component/header/Header'
import Heading from './Component/heading/Heading';


function App() {

  return <div >
   
    <Header />
    <div className='container'>
      <Heading />
      <Card />
      <Form />
    </div>



  </div>

}

export default App;
