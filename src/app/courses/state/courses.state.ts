import { Courses } from "../../models/course.model"

export interface CoursesState{
    courses:Courses[],
    showForm: boolean
} 
export const  initailState:CoursesState = {
    courses: [
        {
          id: 1,
          title: 'Angular Complete Guide',
          description: 'Learn Angular from scratch with hands-on projects and real-world examples.',
          image: './images/Angular.webp',
          author: 'John Smith',
          price: 1299
        },
        {
          id: 2,
          title: 'NgRx State Management',
          description: 'Master NgRx store, effects, and selectors to manage complex Angular app state.',
          image: './images/JS.avif',
          author: 'Jane Doe',
          price: 1599
        }
    ],
    showForm: false
    
}