import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";

import {BookService} from '../ManageCatg/book.service';
import { Book } from './book';
import { User } from './user';


@Component({
    templateUrl: './editBook.component.html',
    styleUrls:['./editBook.css']
})
export class EditBookComponent implements OnInit { 
    id:number;
    bname:string='';
    cat:string='';
    author:string='';
    price:number;
    quan:number;
book:Book;
    books:Book[];
    finalbook:Book;
    users:User[];
    constructor(private _bookService:BookService,private route: ActivatedRoute, private router:Router){
    }

    getBooks(){
        this._bookService.getBookList().subscribe(

            (books:any)=>{
                this.books=books;   
                this.finalbook=this.books.find(x=> x.id == this.id);
                this.bname=this.finalbook.bname;
                this.cat=this.finalbook.category;
                this.author=this.finalbook.author;
                this.quan=this.finalbook.quantity;
                this.price=this.finalbook.price;
                
            },
            err=>console.log(err)
        );

    }
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
         
            this.id = params['id']; 
          });
          
        this.getBooks();
    
    }
    updateBook(){
        this.book={"bname":this.bname, "category":this.cat, "author":this.author, "quantity":this.quan, "price":this.price, "id":this.id, "users":this.finalbook.users};
        this._bookService.updateBookList(this.id,this.book).subscribe((books:any)=>{this.books=books;this.getBooks();window.alert("Book details updated successfully");this.router.navigate(['Books/manage'])},
            err=>console.log(err)
        );

    }
    goBack(){
        this.router.navigate(['./admin']);
    }
}
