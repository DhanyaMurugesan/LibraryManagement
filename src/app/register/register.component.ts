import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { RegService } from './register.service';
import { Register } from './register';

@Component({
    templateUrl: './register.component.html',
    styleUrls:['./register.css']
})
export class RegisterComponent implements OnInit{ 
   register:any[];
   adduser:Register;
   mailid: string='';
   ftname: string='';
   ltname: string='';
   loc: string='';
   mob: number;
   pwd:string='';
   pwd1:string='';
   length:number;
   disabled:boolean;
   typee:string='';
   confirmpassword:boolean;
   constructor(private _regService:RegService,private _route: ActivatedRoute){
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

addUser(){
    console.log("called"+ this.typee);
    if(this.pwd==this.pwd1){
    this.adduser={"email":this.mailid, "fname":this.ftname,"lname":this.ltname,"location":this.loc,"mobile":this.mob, "password":this.pwd, "utype":this.typee,"id":this.length+1};
    this._regService.setUserList(this.adduser).subscribe(
        
        err=>{
            return console.log(err);
        }
    );
    this.confirmpassword=false;
this.disabled=true;
}

else{
this.confirmpassword=true;

}
}}