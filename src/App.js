import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DoorPreview from './components/DoorPreview';

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="App">
      <Header />
      <div className="h-full grid grid-cols-9">
        <div className='flex-none col-span-4'>
          <Sidebar onSelect={handleOptionSelect} />
        </div>
        
        <div className='flex-none col-span-5'>
          <DoorPreview selectedOptions={selectedOption} />
        </div>
      </div>
    </div>
  );
}

export default App;