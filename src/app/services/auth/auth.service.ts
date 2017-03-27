import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { GLOBAL } from '../global';
import { Params } from '@angular/router';

@Injectable()
export class AuthService {
  
  token: string;
  public url: string;

  constructor (private _http: Http) {
    this.url = GLOBAL.url;
  }
  signup(user_to_login){
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('username', user_to_login.username);
        urlSearchParams.append('password', user_to_login.password);
        let body = urlSearchParams.toString();
        console.log('DATOS ANTES DE LLAMAR HTTP: ' + body);
        //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
 				let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    		let options = new RequestOptions({ headers: headers });
        return this._http.post(this.url + '/OAuth/api/auth/',body, options)
                      .map(res => res.json());
  }

   private handleError(error: any) {
        var applicationError = error.headers.get('Application-Error');
        var serverError = error.json();
        var modelStateErrors: string = '';

        if (!serverError.type) {
            console.log(serverError);
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }

        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;

        return Observable.throw(applicationError || modelStateErrors || 'Server error');
    }


  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
}
