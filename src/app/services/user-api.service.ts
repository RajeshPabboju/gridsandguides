import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  actionType: string = 'create';
  selectedUserData: any;
  userDetails: any;
  mockAPI: string = 'https://my-app-07vh.onrender.com/';

  constructor(public httpClient: HttpClient) {}

  getUserProfiles() {
    return this.httpClient.get(this.mockAPI + 'users');
  }

  postUserProfile(selectedUser: any) {
    return this.httpClient.post(this.mockAPI + 'user', selectedUser);
  }

  putUserProfile(selectedUser: any) {
    return this.httpClient.put(
      this.mockAPI + 'user/' + selectedUser.id,
      selectedUser
    );
  }

  deleteUserProfile(selectedUser: any) {
    return this.httpClient.delete(this.mockAPI + 'user/' + selectedUser.id);
  }
}
