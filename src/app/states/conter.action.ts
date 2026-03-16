import { createAction, props } from "@ngrx/store";

export const increament = createAction('increament');
export const decreament = createAction('decreament');
export const reset = createAction('reset');
export const customIncrement = createAction('customIncrement', props<{value: number}>());
export const customToggle = createAction('customToggle');