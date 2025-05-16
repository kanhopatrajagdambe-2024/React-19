import React, { useReducer } from 'react'

export default function UseReducerExample() {

    const initialState = {
        count:0,
        inc:2,
        dec:2
    }

    const Counterreducer = (state, action) =>{
        switch(action.type){
            case "INCREMENT":
             return {
                ...state,
               count: state.count + 1
             }
             case "DECREMENT":
             return {
                ...state,
               count: state.count - 1
             }
             case "INCBYTWO":
                return {
                   ...state,
                  count: state.count + 2
                }
             case "RESET":
                return {
                   ...state,
                  count: 0
                }
            default:
                return state;
        }

    }

    const [ state, dispatch] = useReducer(Counterreducer, initialState)
  return (
    <div >
    <h1>Counter App</h1>
    <h4>Result: {state.count}</h4>
    <button onClick={()=>dispatch({type:'INCREMENT'})}  className='btn btn-primary  m-3'>Increment</button>
    <button onClick={()=>dispatch({type:'DECREMENT'})} className='btn btn-primary   m-3'>Decrement</button>
    <button onClick={()=>dispatch({type:'RESET'})} className='btn btn-primary  m-3'>Reset</button>
    <button onClick={()=>dispatch({type:'INCBYTWO'})} className='btn btn-primary  m-3'>Increment BY Two</button>
    </div>
  )
}
