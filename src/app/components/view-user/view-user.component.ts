import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss'],
})
export class ViewUserComponent implements OnInit {
  userDetails: any;
  constructor(public userApiService: UserApiService, public router: Router) {}

  ngOnInit() {
    this.userDetails = this.userApiService.userDetails;
  }

  closeDailog() {
    this.router.navigateByUrl('/users');
  }
}
