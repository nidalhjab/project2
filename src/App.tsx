import React from 'react';
import './App.css';
import { Button } from '@nidalhjab/button-comp';
import testString from '@nidalhjab/ui';

function App() {
  return (
    <div className="App">
      <Button label={"2nd-app"}/>
      <p>{testString}</p>
    </div>
  );
}

export default App;
