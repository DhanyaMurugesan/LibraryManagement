import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router';

import { LoginService } from './Login/login.service';


@Injectable()
export class LoginGuardService implements CanActivate {
    constructor(private loginService:LoginService) { }

    canActivate(): boolean {
        let Log=this.loginService.isLoggedin;
        if (Log==true) {
            return true;
        }
        else {
            window.alert("Please login")
            return false;
        }
    }
}