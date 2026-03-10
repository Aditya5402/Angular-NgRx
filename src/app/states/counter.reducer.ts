import { createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.state";
import { decreament, increament, reset } from "./conter.action";

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
    })
);