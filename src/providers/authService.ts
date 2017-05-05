import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthServiceProvider {

  public fireAuth : any ;
  public userData : any;



  constructor(public afAuth : AngularFireAuth){

  }

}
