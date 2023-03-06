import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetLayoutComponent } from './Layouts/pet-layout/pet-layout.component';
import { ShopLayoutComponent } from './Layouts/shop-layout/shop-layout.component';
import { SocialComponent } from './Layouts/social/social.component';

const routes: Routes = [
  { 
    path: '',
    component: PetLayoutComponent
  },
  {
    path: 'shop',
    component: ShopLayoutComponent
  },
  {
    path: 'social',
    component: SocialComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
