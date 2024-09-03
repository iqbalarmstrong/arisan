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

  const updateCookie = (updatedNames) => {
    document.cookie = `names=${JSON.stringify(updatedNames)}; path=/; expires=Fri, 31 Dec 2040 23:59:59 GMT`;
  };

  const handleInputChange = (event) => {
    const input = event.target.value;
    const regex = /^[a-zA-Z]*$/;
    if (regex.test(input) && input.length <= 20) {
      setName(input);
    }
  };

  const handleSubmit = () => {
    if (name.trim() === '') {
      return;
    }
    if (storedNames.some((storedNames) => storedNames.name === name)) {
      alert(`Name already exists`);
      return;
    }
    const updatedNames = [...storedNames, { name }];
    updateCookie(updatedNames);
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
    updateCookie(updatedNames);
  };

  const shuffleAndPick = () => {
    if (storedNames.length === 0) {
      setRandomName('Please input a name first!');
      return;
    }

    const shuffledNames = [...storedNames].sort(() => Math.random() - 0.5);
    const pickedNameIndex = Math.floor(Math.random() * shuffledNames.length);
    const pickedName = shuffledNames[pickedNameIndex].name;
    const updatedNames = shuffledNames.filter((_, index) => index !== pickedNameIndex);
    setStoredNames(updatedNames);
    updateCookie(updatedNames);
    setRandomName(pickedName);
  };

  return (
    <div className='main'>
      <div className="stuf">
        <div className='place-name'>
          <label htmlFor="name">Put your name here</label>
          <input
            className='input-name'
            type="text"
            id='name'
            value={name}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <button
            className='place-button btn btn-outline-dark'
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
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
                      <button
                        onClick={() => handleRemove(index)}
                        className='delete-button btn btn-outline-dark'
                      >
                        X
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="show-name">
        <button
          className='button-show btn btn-outline-dark'
          onClick={shuffleAndPick}
        >
          Pick a Random Name
        </button>
        {randomName && <h3>{randomName}</h3>}
      </div>
    </div>
  );
}

export default App;
