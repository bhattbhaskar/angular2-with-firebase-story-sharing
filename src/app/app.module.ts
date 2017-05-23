import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { LoginPageComponent } from './login-page/login-page.component';
import {RouterModule, Routes} from "@angular/router";
import {AF} from "../providers/af";
import { HomePageComponent } from './home-page/home-page.component';
import {FormsModule} from "@angular/forms";
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { WriteComponent } from './write/write.component';
import { AboutComponent } from './about/about.component';
import {TruncatePipe} from "../pipe/truncate";
import { PostComponent } from './post/post.component';

export const firebaseConfig = {
  apiKey: "xxxxxxxxxxxx",
  authDomain: "angular-2-firebase-crud.firebaseapp.com",
  databaseURL: "https://angular-2-firebase-crud.firebaseio.com",
  storageBucket: "angular-2-firebase-crud.appspot.com",
  messagingSenderId: "xxxxxxx"
};

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegistrationPageComponent},
  { path: 'write', component: WriteComponent},
  { path: 'about', component: AboutComponent},
  { path: 'post/:id', component: PostComponent},
];

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes),
    FormsModule
  ],
  declarations: [ AppComponent, LoginPageComponent, HomePageComponent, RegistrationPageComponent, WriteComponent, AboutComponent, TruncatePipe, PostComponent ],
  bootstrap: [ AppComponent ],
  providers: [AF]
})
export class AppModule {}
