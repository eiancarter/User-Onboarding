import React from 'react';
import './App.css';

import FormikNewForm from './components/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Login Form</div>
        <FormikNewForm />
      </header>
    </div>
  );
}

export default App;
