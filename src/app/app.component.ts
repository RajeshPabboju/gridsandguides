import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from './services/user-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'gridsAndGuides';
  constructor(public router: Router, public userApiService: UserApiService) {}
  ngOnInit(): void {}

  showDailog(actionType: string) {
    this.userApiService.actionType = actionType;
    this.router.navigateByUrl('/createOrUpdate'); //:4200/
  }
}
