import { createReducer, on } from "@ngrx/store";
import { initailState } from "./courses.state";
import { getCourses } from "./courses.action";

export const coursesReducer = createReducer(
    initailState,
    
)