import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Courses } from '../../models/course.model';

@Component({
  selector: 'app-course-card',
  imports: [FontAwesomeModule],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {
  faPlus = faPlus;
  faPencil = faPencil;
  faTrash = faTrash;

  @Input() course:Courses | null = null;    
}
