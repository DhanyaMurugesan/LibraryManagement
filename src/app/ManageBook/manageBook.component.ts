import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import {BookService} from '../ManageCatg/book.service';

import {Location} from '@angular/common';
import { Book } from './book';


@Component({
    templateUrl: './manageBook.component.html',
    styleUrls:['./manageBook.css']
})
export class ManageBookComponent implements OnInit { 
    p: number = 1;
cname:string='';
   books:Book[];


    constructor(private _bookService:BookService,private route: ActivatedRoute,private location: Location){
    }
ngOnInit(){
this.getList();

}

    delete(idd:number){
    
    this._bookService.deleteBook(idd).subscribe( ()=>{this.getList();window.alert("Deleted successfully")},
        err=>console.log(err)
    );
    
    }
    goBack(){
        this.location.back();
    }
    getList(){
        this._bookService.getBookList().subscribe(
    
            (books:any)=>{ this.books=books},
            err=>console.log(err)
        );
    }
    }
