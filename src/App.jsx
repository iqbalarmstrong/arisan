import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [storedNames, setStoredNames] = useState([]);
  const [randomName, setRandomName] = useState(''); 

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
    if (name.trim() === '') {
      return;
    }
    const updatedNames = [...storedNames, { name }];
    document.cookie = `names=${JSON.stringify(updatedNames)}; path=/; expires=Fri, 31 Dec 2040 23:59:59 GMT`;
    setStoredNames(updatedNames);
    setName('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleRemove = (nameRemove) => {
    const updatedNames = storedNames.filter((_, index) => index !== nameRemove);
    setStoredNames(updatedNames);
    document.cookie = `names=${JSON.stringify(updatedNames)}; path=/; expires=Fri, 31 Dec 2040 23:59:59 GMT`;
  };

  const shuffleAndPick = () => {
    const shuffledNames = [...storedNames].sort(() => Math.random() - 0.5);
    const pickedName = shuffledNames[Math.floor(Math.random() * shuffledNames.length)].name;
    setRandomName(pickedName);
  };

  return (
    <div className='main'>
      <h2>Random Name Picker</h2>
      <div className="stuf">
        <div className='place-name'>
          <label htmlFor="name">put your name here</label>
          <input className='input-name' type="text" id='name' value={name} onChange={handleInputChange} onKeyPress={handleKeyPress}/>
          <button className='place-button' type="submit" onClick={handleSubmit}>Submit</button>
        </div>
        <div className="stored-name">
          {storedNames.length > 0 && (
            <div>
              <h3>Stored Names:</h3>
              <div className="name-list">
                <ul>
                  {storedNames.map((item, index) => (

                    <li className='list' key={index}>
                      {item.name}
                      <button onClick={() => handleRemove(index)} className='delete-button'>X</button>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          )}
        </div>

      </div>
      <div className="show-name">
        <button className='button-show' onClick={shuffleAndPick}>Pick a Random Name</button>
        {randomName && <h3>The person is: {randomName}</h3>}
      </div>

    </div>
  );
}

export default App;
