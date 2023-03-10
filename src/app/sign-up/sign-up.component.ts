import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  model: User = new User('', '', '', '');

  constructor() {}

  onSubmit(): void {
    console.log(this.model);
    console.log('Formulaire envoyé !');
  }
}

export class User {
  constructor(
    public email: string,
    public firstname: string,
    public lastname: string,
    public password: string
  ) {}
}
