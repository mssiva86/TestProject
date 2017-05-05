import {Injectable} from '@angular/core';
import {AngularFireModule,} from  'angularfire2';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataServiceProvider {

   constructor(private af : AngularFireModule){}


}
