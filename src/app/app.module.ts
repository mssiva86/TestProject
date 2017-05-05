import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import {AuthServiceProvider} from '../providers/authService';

import {Geolocation} from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import {Feed,HomePage,ListPage,People,Profile,Notification,Chat,LoginPage} from '../pages/pages';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import {AngularFireModule} from 'angularfire2';
//AF2 Settings
export const firebaseConfig = {
    apiKey: "AIzaSyCreCSDtQLTzZZMKPnlpzzc8b6foA71io4",
    authDomain: "mydream-ac82e.firebaseapp.com",
    databaseURL: "https://mydream-ac82e.firebaseio.com",
    projectId: "mydream-ac82e",
    storageBucket: "mydream-ac82e.appspot.com",
    messagingSenderId: "405170068152"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Feed,
    People,
    Profile,
    Notification,
    Chat,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Feed,
    People,
    Profile,
    Notification,
    Chat,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    AuthServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})


export class AppModule {}
