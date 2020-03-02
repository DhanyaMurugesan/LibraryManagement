import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Register } from './register';

@Injectable()

export class RegService{
    private _regURL="http://localhost:3001/register/";
    register:Register[];
    constructor(private _http:HttpClient){}

    getUserList(){
return this._http.get(this._regURL);
    }
    setUserList(register: Register){
     return this._http.post(this._regURL, register);
}
updateAcc(id:number, register:Register){
    return this._http.put(this._regURL + id ,register);
}
}