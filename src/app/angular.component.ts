import { Component } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { AuthorComponent } from './author.component';
import { StarComponent } from './star.component';

@Component({
  moduleId: module.id,
  selector: 'angular-app',
  templateUrl: 'angular.component.html',
  styleUrls: ['angular.component.css'],
  directives: [CoursesComponent, AuthorComponent, StarComponent]
})

export class AngularAppComponent {
  title = 'angular works well in the browser!';
}
