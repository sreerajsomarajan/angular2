import { Component } from '@angular/core';
import { CoursesComponent } from './courses.component';

@Component({
  moduleId: module.id,
  selector: 'angular-app',
  templateUrl: 'angular.component.html',
  styleUrls: ['angular.component.css'],
  directives: [CoursesComponent]
})
export class AngularAppComponent {
  title = 'angular works well in the browser!';
}
