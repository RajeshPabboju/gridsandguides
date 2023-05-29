import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: any;

  constructor(public userApiService: UserApiService, public router: Router) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userApiService.getUserProfiles().subscribe((res) => {
      this.users = res;
    });
  }

  showDailog(actionType: string, selectedUserData?: any) {
    if (actionType === 'View') {
      this.router.navigateByUrl('/viewUser');
      this.userApiService.userDetails = selectedUserData;
    } else {
      this.userApiService.actionType = actionType;
      this.userApiService.selectedUserData = selectedUserData;
      this.router.navigateByUrl('/createOrUpdate'); //:4200/
    }
  }

  deleteUser(selectedUserData: any) {
    const isConfirm = confirm('Are You sure want to Delete ? ');

    if (isConfirm) {
      this.userApiService
        .deleteUserProfile(selectedUserData)
        .subscribe((res) => {
          this.router.navigateByUrl('/users');
          this.getUsers();
        });
    } else {
      this.router.navigateByUrl('/users');
    }
  }
}
