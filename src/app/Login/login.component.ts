import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import {Router} from "@angular/router";
import { RegService } from '../register/register.service';
import {LoginService} from './login.service';
@Component({
    templateUrl: './login.component.html',
    styleUrls:['./login.css']
})
export class LoginComponent implements OnInit{ 
   register:any[];
   uname:string='';
   passwd:string='';
   typee:string='';
   length:number;
   i:number;
   namee:boolean=false;

   constructor(private _regService:RegService,private _loginService:LoginService, private _route: ActivatedRoute, private router:Router){
}
getUser():void{
    this._regService.getUserList().subscribe(

        (register:any)=>{this.register=register; this.length=register.length},
        err=>console.log(err)
    );
}

ngOnInit(){
this.getUser();
}

login(){
for(this.i=0;this.i<this.length;this.i++){
if(this.register[this.i].email==this.uname){
    this.namee=true;
    if(this.passwd==this.register[this.i].password){
     
     if(this.register[this.i].utype == this.typee){
        this._loginService.isLoggedin=true;
        this._loginService.fname=this.register[this.i].fname;
        this._loginService.id=this.register[this.i].id;
        if(this.register[this.i].utype == "admin")
        this.router.navigate(['admin']);
        else 
        this.router.navigate(['user']);
     }
     else{
        window.alert("Usertype doesn't match. Please selet correct user type")
     }
    }
    else{
        window.alert("Username and password doesn't match")
    }
}
}
if(this.namee==false){
    window.alert("Username doesn't exists");
}
   }
}
