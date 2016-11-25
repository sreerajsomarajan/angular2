import {Component} from '@angular/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
  selector: 'courses',
  template: `<h2>Courses</h2>
             {{ title }}
             <input type="text" autoGrow />
             <ul>
               <li *ngFor="let course of courses">{{ course }}</li>
             </ul>`,
  providers: [CourseService],
  directives: [AutoGrowDirective]
})

export class CoursesComponent {
  title = 'Title for course page'
  courses;

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
  }
}
