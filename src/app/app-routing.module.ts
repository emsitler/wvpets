import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetCreatorComponent } from './Layouts/pet-creator/pet-creator.component';
import { PetLayoutComponent } from './Layouts/pet-layout/pet-layout.component';
import { ShopLayoutComponent } from './Layouts/shop-layout/shop-layout.component';
import { SocialComponent } from './Layouts/social/social.component';
import { LoginPageComponent } from './Layouts/login-page/login-page.component';
import { NewAccountPageComponent } from './Layouts/new-account-page/new-account-page.component';

const routes: Routes = [
  { 
    path: 'home',
    component: PetLayoutComponent
  },
  {
    path: 'shop',
    component: ShopLayoutComponent
  },
  {
    path: 'social',
    component: SocialComponent
  },
  {
    path: 'petCreator',
    component: PetCreatorComponent
  },
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: 'createAccount',
    component: NewAccountPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
