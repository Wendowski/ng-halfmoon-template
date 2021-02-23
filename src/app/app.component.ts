import { Component } from '@angular/core';
import { faBandAid, faMoon } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-halfmoon';
  faBandaid = faBandAid;
  faMoon = faMoon;
}
