import { createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.state";
import { customIncrement, customToggle, decreament, increament, reset } from "./conter.action";

export const counterReducer = createReducer(initialState,
    on(increament, (state)=>{
        return {
            ...state,
            counter:state.counter + 1
        }
    }),

    on(decreament, (state)=>{
        return{
            ...state,
            counter:state.counter - 1
        }
    }),

    on(reset, (state)=>{
        return{
            ...state,
            counter:0
        }
    }),
    on(customIncrement, (state, action)=>{
        console.log(action);
        return{
            ...state,
            counter: Number(state.counter) + Number(action.value)
        }
    }),
    on(customToggle, (state)=>{
        return{
            ...state,
            toggle: !state.toggle
        }
    })
);