import { Component,  OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {BookService} from '../ManageCatg/book.service';


import { Book } from './book';
import { IssuedBook } from './issuedBook';
import { RegService } from '../register/register.service';
import { Register } from '../register/register';


@Component({
    templateUrl: './issuedBooks.component.html',
    styleUrls:['./issuedBook.css']
})
export class IssuedBookComponent implements OnInit  { 
  isloaded:boolean;
cname:string='';
   books:Book[];
issued:IssuedBook[]=[];
uname:string='';
userslist:Register[];
leng:number;
    constructor(private _bookService:BookService,private router: Router, private _loginService:RegService){
    }
ngOnInit(){
this.getList();

}
  
    goBack(){
        this.router.navigate(['./admin']);
    }
    getList(){
        this._loginService.getUserList().subscribe(
            (users:any)=>{this.userslist=users;this.leng=this.userslist.length;
                this._bookService.getBookList().subscribe(
                    (books:any)=>{ this.books=books;
                       
                        for (let i=0;i<books.length;i++) {
                            for(let j=0;j<books[i].users.length;j++){
                                for(let k=0;k<this.leng;k++){
                                 
                                    if(books[i].users[j].id == this.userslist[k].id){
                                        
                                        this.issued.push({"bname":books[i].bname,"uname":this.userslist[k].fname,"time":this.books[i].users[j].date });
                                        this.isloaded=true;
                                    }
                                    
                                }
                            }
                           }
                    },
                    err=>console.log(err)
                );
            
            }
        );
        
    }
    }
