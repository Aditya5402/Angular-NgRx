import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../states/app.state';
import { showForm as showFormAction } from '../state/courses.action';

@Component({
  selector: 'app-add-course',
  imports: [],
  templateUrl: './add-course.html',
  styleUrl: './add-course.css',
})
export class AddCourse {

  constructor(private store: Store<AppState>) {}

  closeForm() {
    this.store.dispatch(showFormAction({ value: false }));
  }
}
