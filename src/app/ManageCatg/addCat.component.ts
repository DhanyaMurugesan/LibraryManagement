import { Component, OnInit } from '@angular/core';

import {BookService} from './book.service';
import { Category } from './category';

import { Router } from '@angular/router';


@Component({
    templateUrl: './addCat.component.html',
    styleUrls:['./addCat.css']
})
export class AddCatComponent implements OnInit { 
  
    id:number;
    category:Category;
cname:string='';
   
leng:number;

    constructor(private _bookService:BookService,private router:Router){
    }
ngOnInit(){

    this._bookService.getCatList().subscribe(
    
        (cats:any)=>{ this.leng=cats.length},
        err=>console.log(err)
    );
}
    Add(){
    this.category={"cname":this.cname, "id":this.leng+1};
    this._bookService.setCatList(this.category).subscribe( ()=>{window.alert("Category added successfully"); this.router.navigate(['/Categories/manage'])},
        err=>console.log(err)
    );
    
    }
    goBack(){
        this.router.navigate(['./admin']);
    }
    }
