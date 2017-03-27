import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
//componente modelos, servicios
//import { AuthService } from '../services/auth/auth.service';
import { AuthenticationService } from '../services/auth/authentication.service';

import { User } from '../models/auth/user';
@Component({
    templateUrl: 'login.component.html',
    providers: [AuthenticationService, FormsModule]

})
export class LoginComponent implements OnInit{
	  loading = false;
    error = '';
    model: any = {};
/*    public user: User;
  	public title = 'Duo Kichwa';
    public identity;
    public token;
    private model = {'username':'', 'password':''};
    public errorMessage: string;
    public loginState: boolean;
*/    
		constructor(
      	private router: Router,
        private _authenticationService: AuthenticationService
        ){
        //this.user = new User('','','','','','ROLE_USER','');
    }
    ngOnInit(){
      //var texto = this._loginService.signup();
      //console.log();
      this._authenticationService.logout();
    }
    login(){
      this.loading = true;
      this._authenticationService.login(this.model.username, this.model.password)
      .subscribe(result => {
        	if(result === true){
						console.log('entro al Index 2 : ');
						this.router.navigate(['/logeado/index2']);
          } else {
            console.log('entra al error : ');
            this.router.navigate(['/logeado/index2']);
            this.error = 'Username or password';
            this.loading = false;
          }
      });
    }
/*  	public onSubmit(){
      console.log(this.model);
      //alert('HOA');
  	this._loginService.signup(this.model).subscribe(
      response =>{
        this.loginState = true;
        console.log('desde RESPONSE : ' + response);
      },
      error => {
        this.loginState = false;
        var errorMessage = <any>error;
        if(errorMessage != null){
          console.log('wipayerror: ' + error);
        }
        this.errorMessage = errorMessage;
      }
    );
  	}*/
 }
 
