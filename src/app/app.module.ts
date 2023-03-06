import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './Navigation/top-nav-bar/top-nav-bar.component';
import { PetLayoutComponent } from './Layouts/pet-layout/pet-layout.component';
import { ShopLayoutComponent } from './Layouts/shop-layout/shop-layout.component';
import { SocialComponent } from './Layouts/social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    PetLayoutComponent,
    ShopLayoutComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
