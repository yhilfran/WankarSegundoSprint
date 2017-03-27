import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { GLOBAL } from '../global';
import { Params } from '@angular/router';

@Injectable()

export /**
 * account service
 */
class AccountService {
   public url: string;
  constructor (private _http: Http) {
    this.url = GLOBAL.url;
  }

  addAccount(account_obj){
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('person', '2');
    urlSearchParams.append('username', account_obj.username);
    urlSearchParams.append('password', account_obj.clave);
    urlSearchParams.append('rol', 'ROL_ADMIN');
    urlSearchParams.append('correo', account_obj.correo);
    let body = urlSearchParams.toString();
    console.log('ESTO VA A INSERTAR : ' + body);
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers });
    //let headers = new Headers({ 'Content-Type': 'application/x-www-urlencoded; charset=UTF-8' });
    return this._http.post(this.url + '/OAuth/api/auth/register', body, options)
          .map(res => res.json());
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
      let errMsg: string;
      if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Observable.throw(errMsg);
  }
}
