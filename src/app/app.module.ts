import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './Navigation/top-nav-bar/top-nav-bar.component';
import { PetLayoutComponent } from './Layouts/pet-layout/pet-layout.component';
import { ShopLayoutComponent } from './Layouts/shop-layout/shop-layout.component';
import { SocialComponent } from './Layouts/social/social.component';
import { ShopCardComponent } from './ShopComps/shop-card/shop-card.component';
import { PetCreatorComponent } from './Layouts/pet-creator/pet-creator.component';
import { PostUIComponent } from './post-ui/post-ui.component';
import { LoginPageComponent } from './Layouts/login-page/login-page.component';
import { NewAccountPageComponent } from './Layouts/new-account-page/new-account-page.component';

import{ AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideDatabase,getDatabase } from '@angular/fire/database';



@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    PetLayoutComponent,
    ShopLayoutComponent,
    SocialComponent,
    ShopCardComponent,
    PetCreatorComponent,
    PostUIComponent,
    LoginPageComponent,
    NewAccountPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
