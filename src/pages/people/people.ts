import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the People page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})
export class People {


  users = [
    {  id : 1, name : 'Siva' , age : 24 , city : 'New York' ,  country : 'United States'  },
    {  id : 1, name : 'Sakthi' , age : 24 , city : 'Los Vagas' , country : 'United States'  },
    {  id : 1, name : 'SSS' , age : 24 , city : 'Texas' , country : 'United States'  },
    {  id : 1, name : 'Vidhyaa' , age : 24 , city : 'Alaska' , country : 'United States'  },
    {  id : 1, name : 'Elango', age : 24 , city : 'Alabama' , country : 'United States'  },
    {  id : 1, name : 'Santhana' , age : 24 , city : 'Chennai' , country : 'India'  },
    {  id : 1, name : 'Krishnan' , age : 24 , city : 'Tirunelveli' , country : 'India' },
    {  id : 1, name : 'Sadhana' , age : 24 , city : 'Delhi' , country :'India' },
    {  id : 1, name : 'Vishnu' , age : 24 , city : 'Mumbai' , country : 'India'  },
    {  id : 1, name : 'Priya', age : 24 , city : 'Bengal' , country : 'India'  },
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad People');
  }

}
