import { Component, Input } from '@angular/core';
import { CourseCard } from './course-card/course-card';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { getCourses, showCreateForm } from './state/courses.selector';
import { showForm as showFormAction } from './state/courses.action';
import { AsyncPipe } from '@angular/common';
import { Courses } from '../models/course.model';
import { AddCourse } from './add-course/add-course';
import { showForm } from './state/courses.action';
@Component({
  selector: 'app-courses',
  imports: [CourseCard, AsyncPipe, AddCourse],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class CoursesCLass {

  courses$: Observable<Courses[]> | null = null;
  showForm$: Observable<boolean> | null = null;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.courses$ = this.store.select(getCourses);
    this.showForm$ = this.store.select(showCreateForm);
  }

  showCreateForm() {
    this.store.dispatch(showFormAction({ value: true }));
  }
}
