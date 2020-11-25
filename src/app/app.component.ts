import {Component, OnInit} from '@angular/core';
import {ApiService} from './core/api/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'structure';

  constructor(
    private API: ApiService,
    private router: Router
  ) {
  }

  ngOnInit() {
    // this.router.navigate([`information-form`]);
  }

}
