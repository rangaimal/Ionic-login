 import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import {AngularFireModule} from'angularfire2';
import {AngularFireAuthModule} from'angularfire2/auth';
import { LoggedinPage } from '../pages/loggedin/loggedin';

const firebaseAuth ={
  apiKey: "AIzaSyAq_TBYQY-_Tq6xXWBFz86O18871KaYucI",
  authDomain: "test-project-e6012.firebaseapp.com",
  databaseURL: "https://test-project-e6012.firebaseio.com",
  projectId: "test-project-e6012",
  storageBucket: "test-project-e6012.appspot.com",
  messagingSenderId: "6039681259"
};




@NgModule({
  declarations: [
    MyApp, 
    HomePage,
    LoginPage, 
   RegisterPage,
   LoggedinPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),    
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
    

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
     HomePage,
    LoginPage,
    RegisterPage,
    LoggedinPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {

}
