import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserInfoService } from '@fluig-codelab-lib/ngx-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    UserInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
