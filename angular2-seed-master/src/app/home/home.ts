import {Component} from '@angular/core';
import {Movies} from '../movies/movies.component';

@Component({
  selector: 'home',
  styleUrls: ['./home.css'],
  templateUrl: './home.html',
  directives: [Movies]
})

export class Home {


}
