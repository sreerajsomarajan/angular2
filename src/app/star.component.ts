import { Component } from '@angular/core'
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

@Component({
  selector: 'favourite',
  template: `<i
                class="glyphicon"
                [class.glyphicons-star-empty]="!isFavourite"
                [class.glyphicons-star]="isFavourite"
                (click)="onClick()" style="border:1px solid red; padding: 20px;">
             </i>
            `
})

export class StarComponent {
  isFavourite = false;
  onClick() {
    this.isFavourite = !this.isFavourite;
  }
}
