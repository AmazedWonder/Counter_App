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


// Setting the initial state for count
const initialState: State = { count: 0 };

// The reducer function takes the current state and an action as arguments
// Reducer function that updates the state based on the action received
function stateReducer(state: State, action: CounterAction): State {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.value };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return initialState;
        default:
            throw new Error(`Unknown action`);
    }
}