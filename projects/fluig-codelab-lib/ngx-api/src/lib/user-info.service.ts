import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  private user = {
    name : 'Eduardo Gabriel Zzz'
  };

  constructor() {}

  getuserName(): string {
    return this.user.name;
  }
}
