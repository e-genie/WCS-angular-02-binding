import { Routes } from '@angular/router';
import { MyFormComponent } from './my-form/my-form.component';

import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const ROUTES: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'signup', component: SignUpComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'form', component: MyFormComponent },
];

export { ROUTES };
