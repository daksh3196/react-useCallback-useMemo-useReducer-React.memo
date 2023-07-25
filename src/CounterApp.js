import React, { memo, useState, useMemo, useReducer } from 'react';
import './style.css';

const INITIAL_COUNT = { counter: 0 };
const reducerCounter = (state, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return { counter: state.counter + 1 };
    case 'DECREASE_COUNTER':
      return {
        counter: state.counter !== 0 ? state.counter - 1 : (state.counter = 0),
      };
    case 'RESET_COUNTER':
      return inititalState;
    default:
      throw new Error('Error occured in counter');
  }
};

const CounterApp = memo(function CounterApp() {
  const [state, dispatch] = useReducer(reducerCounter, INITIAL_COUNT);
  const [clicks, setClicks] = useState(0);

  useMemo(() => {
    setClicks(clicks + 1);
  }, [state]);

  const increaseCounter = () => {
    dispatch({
      type: 'INCREASE_COUNTER',
    });
  };

  const decreaseCounter = () => {
    dispatch({
      type: 'DECREASE_COUNTER',
    });
  };

  const resetCounter = () => {
    dispatch({
      type: 'RESET_COUNTER',
    });
  };

  return (
    <div>
      <button style={{ background: 'red' }} onClick={decreaseCounter}>
        -1
      </button>
      <span style={{ margin: '0px 5px' }}>{state.counter}</span>
      <button style={{ background: 'green' }} onClick={increaseCounter}>
        +1
      </button>
      <div>
        <button onClick={resetCounter}> Reset Counter </button>
      </div>
      <div>{clicks} Clicks!</div>
    </div>
  );
});

export default CounterApp;
