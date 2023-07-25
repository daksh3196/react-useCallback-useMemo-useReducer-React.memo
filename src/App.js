import React, { useState, useMemo, useReducer } from 'react';
import CounterApp from './CounterApp';
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

export default function App() {
  return (
    <div>
      <h1>Hello Daksh!</h1>
      <CounterApp />
    </div>
  );
}
