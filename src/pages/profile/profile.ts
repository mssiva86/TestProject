import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,Platform} from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';


/**
 * Generated class for the Profile page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class Profile {

  mode = false;
  isAndriod : boolean = false;
  segments : string = "followers";
  broadcastMessage : string = "I am gonna shop today";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public toastCtrl : ToastController,
              public platform : Platform,
              public geolocation : Geolocation) {
    this.isAndriod = platform.is('andriod');
  }


   public showToastMessage(){
      if(this.mode){
      let toast = this.toastCtrl.create({
          message : "Awesome, you are gonna meet incredible people & create memories today",
          duration : 2000,
      });
      toast.present();
      this.geolocation.getCurrentPosition().then((resp) => {
          console.log(resp.coords.longitude);
          console.log(resp.coords.latitude);
      }).catch((error) => {
        console.log('Error getting location',error);
      });

   /*   let watch = this.geolocation.watchPosition();
      watch.subscribe((data) => {
          console.log(data.coords.longitude);
          console.log(data.coords.latitude);
      }); */
   }
   else{
      let toast = this.toastCtrl.create({
          message : "Come back and enable this again, to meet and share memories",
          showCloseButton : true,
          closeButtonText : 'Ok',
       //   duration : 2000,

      });
      toast.present();
   }

   }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Profile');
  }



}
