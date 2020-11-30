import React from 'react';
import './App.css';
import Dinner from './dinner.js';

function App() {
    return(
      <div>
        <Dinner dishName="chiken karahi"/>
        <Dinner dishName="mutton"/>
        <Dinner dishName="biryani"/>
      </div>
    );
}

export default App;
