import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  user = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: 'to be or not to be',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg',
  };

  isHidden = false;

  toggle() {
    this.isHidden = !this.isHidden;
  }
}
