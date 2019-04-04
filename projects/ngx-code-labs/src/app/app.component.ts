import { Component, OnInit } from '@angular/core';
import { UserInfoService } from 'projects/fluig-codelab-lib/ngx-api/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngx-code-labs';
  username;


  constructor(private userService: UserInfoService){

  }

  ngOnInit() {
    this.username = this.userService.getuserName();
  }
}
