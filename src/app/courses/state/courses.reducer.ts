import { createReducer, on } from "@ngrx/store";
import { initailState } from "./courses.state";
import { showForm } from "./courses.action";

export const coursesReducer = createReducer(
    initailState,
    on(showForm, (state, action)=>{
        return{
            ...state,
            showForm: action.value
        }
    })
)