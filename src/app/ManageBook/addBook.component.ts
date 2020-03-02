import { Component, ViewChild, OnInit } from '@angular/core';
import {  Router } from "@angular/router";
import {BookService} from '../ManageCatg/book.service';

import { NgForm } from '@angular/forms';
import { User } from './user';
import { Book } from './book';
import { Category } from '../ManageCatg/category';


@Component({
    templateUrl: './addBook.component.html',
    styleUrls:['./addBook.css']
})
export class AddBookComponent implements OnInit { 
    @ViewChild('formRef', {static: false}) addProdForm:NgForm;
    id:number;
    book:Book;
    cat:string='';
    auth:string='';
    bname:string='';
    prc:number;
    quan:number;
    categ:Category[];
    users:User[]=[];
leng:number;

    constructor(private _bookService:BookService, private router:Router){
    }
ngOnInit(){

    this._bookService.getBookList().subscribe(
    
        (books:any)=>{ this.leng=books.length},
        err=>console.log(err)
    );
    this._bookService.getCatList().subscribe((catg:any)=>{this.categ=catg},
    
    err=>console.log(err));
}
    onSubmit(formValue: any){
    this.book={"bname":this.bname, "category":this.cat, "author":this.auth, "price":this.prc, "quantity":this.quan,"id":this.leng+1, "users":this.users};
    this._bookService.setBookList(this.book).subscribe( ()=>{window.alert("Book added successfully");this.router.navigate(['/Books/manage'])},
        err=>console.log(err)
    );
    
    }
    goBack(){
        this.router.navigate(['./admin']);
    }
    }
