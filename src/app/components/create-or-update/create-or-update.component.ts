import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserApiService } from 'src/app/services/user-api.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-or-update',
  templateUrl: './create-or-update.component.html',
  styleUrls: ['./create-or-update.component.scss'],
})
export class CreateOrUpdateComponent implements OnInit {
  actionType: string = '';
  userForm: any;
  constructor(
    public router: Router,
    public userApiService: UserApiService,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.actionType = this.userApiService.actionType;

    this.userForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
    });
    if (this.actionType === 'Edit') {
      this.userForm.patchValue(this.userApiService.selectedUserData);
    }
  }

  get userFormControl() {
    return this.userForm.controls;
  }

  saveUserData() {
    const usersData = this.userForm.value;
    if (this.actionType === 'Create') {
      this.userApiService.postUserProfile(usersData).subscribe((res) => {
        this.router.navigateByUrl('/users');
      });
    } else if (this.actionType === 'Edit') {
      this.updateUserData();
      // this.userForm.patchValue(this.userApiService.selectedUserData);
      //this.router.navigateByUrl('/users');
    }
  }

  updateUserData() {
    const userData = this.userForm.value;
    this.userApiService.putUserProfile(userData).subscribe((res) => {
      this.router.navigateByUrl('/users');
    });
  }

  closeDailog() {
    this.router.navigateByUrl('/users');
  }
}
