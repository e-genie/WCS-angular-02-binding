import { Component } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent {
  model: Order = new Order('', 0, new Date(), '');

  constructor() {}

  onSubmit(): void {
    // form submitted
    console.log('Formulaire envoyé !');
  }
}
export class Order {
  title: string;
  quantity: number;
  date: Date;
  contact: string;

  constructor(title: string, quantity: number, date: Date, contact: string) {
    this.title = title;
    this.quantity = quantity;
    this.date = date;
    this.contact = contact;
  }
}
// même chose que :
// export class Order {
//   constructor(
//       public title: string,
//       public quantity: number,
//       public date: Date,
//       public contact: string
//   ) {}
// }
