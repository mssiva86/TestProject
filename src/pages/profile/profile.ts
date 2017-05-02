import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,Platform} from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl : ToastController,public platform : Platform) {
    this.isAndriod = platform.is('andriod');
  }


   public showToastMessage(){
      if(this.mode){
      let toast = this.toastCtrl.create({
          message : "Awesome, you are gonna meet incredible people & create memories today",
          duration : 2000,
      });
      toast.present();
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
