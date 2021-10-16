import './App.css';

import React, { useState } from 'react';
import {
  Button,
  TextField,
  Typography,
  Paper
} from '@material-ui/core';

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  function calculate(operation) {
    switch (operation) {
      case '-':
        setResult(number1 - number2);
        break;
      case '*':
        setResult(number1 * number2);
        break;
      case '/':
        setResult(number1 / number2);
        break;
      default:
        setResult(number1 + number2);
    }
  }

  return (
    <div className="App">
      <Paper className="paper">
        <div className="spacer">
        <TextField data-testid="number1" onChange={(event) => setNumber1(Number(event.target.value))}></TextField>
        <TextField data-testid="number2" onChange={(event) => setNumber2(Number(event.target.value))}></TextField>
          </div>
        <br/>
        <br/>
        <div className="spacer">
          <Button variant="contained" onClick={() => calculate('+')}>+</Button>
          <Button variant="contained" onClick={() => calculate('-')}>-</Button>
          <Button variant="contained" onClick={() => calculate('*')}>*</Button>
          <Button variant="contained" onClick={() => calculate('/')}>/</Button>
        </div>
        <br/>
        <Typography data-testid="result">{result}</Typography>
      </Paper>
    </div>
  );
}

export default App;
