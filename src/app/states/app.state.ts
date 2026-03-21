import { coursesReducer } from "../courses/state/courses.reducer";
import { CoursesState } from "../courses/state/courses.state";
import { counterReducer } from "./counter.reducer";
import { CounterState } from "./counter.state";

export interface AppState{
    counter:CounterState,
    courses:CoursesState
}

export const appReducer = {
    counter:counterReducer,
    courses:coursesReducer
}