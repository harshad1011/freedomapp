import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  products = [{ name: 'Product1' }];

  mousehover = function (flag) {
    console.log("mouse entered: ", flag);
  }
}
