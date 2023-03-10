import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { BlockComponent } from './block/block.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [AppComponent, BlockComponent, UserProfileComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
