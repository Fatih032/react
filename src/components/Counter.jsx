import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Counter(props) {
    let navigate = useNavigate();
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
      };
    
      //Create handleDecrement event handler
      const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
      };

      function cancel(){
        navigate('/');
      }

    return (
        <div>
        <div>
          <h5>Count is {count}</h5>
          <Button variant='info' onClick={handleDecrement}>-</Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant='success' onClick={handleIncrement}>+</Button>
        </div>
        <br />
        <Button variant='warning' onClick={() => setCount(0)}>Reset</Button>
        <br />
        <br />
        <Button variant="danger" onClick={cancel}>Cancel</Button>
      </div>
    )
  }
  
  export default Counter;

