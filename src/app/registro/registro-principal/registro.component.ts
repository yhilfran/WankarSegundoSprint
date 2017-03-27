import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//modelos data
import { User } from '../../models/auth/user';
import { Account } from '../../models/auth/account';
import { AccountService } from '../../services/auth/account.service';


@Component({
  templateUrl: 'registro.component.html',
  providers:[AccountService]
})
export class RegistroComponent implements OnInit {


  ngOnInit(): void {}

  public user: User;
  public account: Account;

  public model = { 'username':'','correo':'', 'clave':''};
 	constructor(private _accountService: AccountService){
        this.user = new User('','','','','','ROLE_USER','');
    }
   public onSubmit(){
      console.log(this.model);
      //alert('HOA');

      this._accountService.addAccount(this.model).subscribe(
      response =>{
        console.log('desde RESPONSE : ' + response);
      },
      error => {
        var errorMessage = <any>error;
        if(errorMessage != null){
          console.log('wipayerror: ' + error);
        }
      }
    );

  	}

}
