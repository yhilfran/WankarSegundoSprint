import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { GLOBAL } from '../global';

@Injectable()
export class AuthenticationService {
    public token: string;
  	public url: string;
    constructor(private _http: Http) {
        // set token if saved in local storage
        this.url = GLOBAL.url;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
        //va la url de conexion
		let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('username', username);
        urlSearchParams.append('password', password);
        let body = urlSearchParams.toString();
        console.log('DATOS ANTES DE LLAMAR HTTP: ' + body);
        //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
 			let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    		let options = new RequestOptions({ headers: headers });

        return this._http.post(this.url + '/OAuth/api/auth/', body, options )
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}