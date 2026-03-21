import { Courses } from "../../models/course.model"

export interface CoursesState{
    courses:Courses[]
} 
export const  initailState:CoursesState = {
    courses: [
        {
          id: 1,
          title: 'Angular Complete Guide',
          description: 'Learn Angular from scratch with hands-on projects and real-world examples.',
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg',
          author: 'John Smith',
          price: 1299
        },
        {
          id: 2,
          title: 'NgRx State Management',
          description: 'Master NgRx store, effects, and selectors to manage complex Angular app state.',
          image: 'https://ngrx.io/assets/images/badge.svg',
          author: 'Jane Doe',
          price: 1599
        }
    ]
    
}