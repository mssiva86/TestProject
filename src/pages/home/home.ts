import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Feed,People,Profile,Notification} from '../pages';

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

  }

}
