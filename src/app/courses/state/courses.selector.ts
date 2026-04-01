import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoursesState } from "./courses.state";

const getCoursesState = createFeatureSelector<CoursesState>('courses');

export const getCourses = createSelector(getCoursesState, (state) =>{
    return state.courses;
})

export const showCreateForm = createSelector(getCoursesState, (state) =>{
    return state.showForm;
})