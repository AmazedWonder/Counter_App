// Importing the useReducer hook from React
import {useReducer} from 'react';

// Defining the shape of our state object: it has one property `count` of type number
interface State {
    count: number;
};

// Defining the possible actions our reducer can handle
// - increment: increases the count by a given value
// - decrement: decreases the count by 1
// - reset: resets the count to 0
type CounterAction =
    {type: 'increment'; value: State['count'] } |
    {type: 'decrement'} |
    {type: 'reset'};

// The reducer function takes the current state and an action as arguments
// Setting the initial state for the counter
const initialState: State = { count: 0 };