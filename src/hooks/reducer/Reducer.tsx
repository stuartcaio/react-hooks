import { useReducer } from "react"

type actions = {
    type: "INCREMENT" | "DECREMENT"
};

function reducer(state: {count: number}, action: actions){
    if(action.type === "INCREMENT"){
        return {...state, count: state.count + 1};
    } else if(action.type === "DECREMENT"){
        return {...state, count: state.count - 1};
    } else{
        return state.count;
    }
}

export default function Reducer(){
    const [state, dispatch] = useReducer(reducer, {count: 0});   

    return (
        <div>
            <h1>Reducer</h1>
            <p>Value: {state.count}</p>
            <div>
                <button onClick={() => dispatch({type: "INCREMENT"})}>Increment</button>
                <button onClick={() => dispatch({type: "DECREMENT"})}>Decrement</button>
            </div>
        </div>
    )
}