import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [storedNames, setStoredNames] = useState([]);

  useEffect(() => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    };

    const namesCookie = getCookie('names');
    if (namesCookie) {
      setStoredNames(JSON.parse(namesCookie));
    }
  }, []);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    const updatedNames = [...storedNames, { name }];
    document.cookie = `names=${JSON.stringify(updatedNames)}; path=/; expires=Fri, 31 Dec 2040 23:59:59 GMT`;
    setStoredNames(updatedNames);
    setName('');
  };
  const handleRemove = (nameRemove) =>{
    const updatedNames = storedNames.filter((_, index) => index !== nameRemove);
    setStoredNames(updatedNames);
    document.cookie = `names=${JSON.stringify(updatedNames)}; path=/; expires=Fri, 31 Dec 2040 23:59:59 GMT`;
  }

  return (
    <div className='main'>
      <div>
        <label htmlFor="name" className=''>Name</label>
        <input type="text" className="" id='name' value={name} onChange={handleInputChange} />
      </div>
      <button type="submit" className='' onClick={handleSubmit}>Submit</button>
      {storedNames.length > 0 && (
        <div className=''>
          <h3>Stored Names:</h3>
          <ul>
            {storedNames.map((item, index) => (
              <li key={index}>{item.name}
                <button onClick={()=>handleRemove(index)}>X</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
