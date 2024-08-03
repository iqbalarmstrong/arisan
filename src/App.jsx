import React, { useState,useEffect } from 'react';
import './App.css';

function App() {
  const [name,setName] =useState('');
  const  [storedName, setStoredName] =useState('');

  useEffect (()=>{
    const getCookie =(name)=>{
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    };
    const nameCookie =getCookie('name');
    if (nameCookie) {
      setStoredName(nameCookie);
    }
  }, []);

  const handleInputChange = (event) =>{
    setName(event.target.value);
  };

  const handleSubmit = ()=>{
    document.cookie = `name=${name}; path=/; expires=Fri, 31 Dec 2040 23:59:59 GMT`;
    setStoredName(name);
    setName('');
  }

  return (
    <div className='main'>
      <div>
        <label htmlFor="name" className=''>name</label>
        <input type="text" className="" id='name'value={name} onChange={handleInputChange} />
      </div>
       <button type="submit" className='' onClick={handleSubmit}>submit</button>
       {storedName &&(
        <div className=''>
          <p>Name: {storedName}</p>
        </div>
       )}
    </div>
  );
}

export default App;
