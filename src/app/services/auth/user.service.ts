import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from './authentication.service';
import { User } from '../../models/auth/user';

import { GLOBAL } from '../global';

@Injectable()
export class UserService {
    public url: string;

    constructor(
        private _http: Http,
        private _authenticationService: AuthenticationService) {
            this.url = GLOBAL.url;
    }

    getUsers(): Observable<User[]> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this._authenticationService.token });
        let options = new RequestOptions({ headers: headers });

        // get users from api
        return this._http.get(this.url + '/OAuth/api/auth/', options)
            .map((response: Response) => response.json());
    }
}