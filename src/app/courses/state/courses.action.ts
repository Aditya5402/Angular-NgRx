import { createAction, props } from "@ngrx/store";

export const showForm = createAction('showForm', props<{value: boolean}>());