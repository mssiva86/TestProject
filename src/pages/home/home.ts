import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Feed,People,Profile,Notification,LoginPage} from '../pages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  feedTab = Feed;
  peopleTab = People;
  profileTab = Profile;
  notificationTab = Notification;
  constructor(public navCtrl: NavController) {

    if(!this.amILoggedIn()){
      console.log("Not logged in ");
        this.navCtrl.push(LoginPage);
    }

  }

  amILoggedIn()
  {
      if(window.localStorage.getItem('currentUser')){
        return true;
      }
        return false;
  }

}
