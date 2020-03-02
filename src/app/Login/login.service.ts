import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class LoginService{
    id:number;
    fname:string='';
    isLoggedin:boolean;
    constructor(private _http:HttpClient){
        this.isLoggedin=false;
    }
}