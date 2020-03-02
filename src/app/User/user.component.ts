import {Component, OnInit} from '@angular/core'
import {BookService} from '../ManageCatg/book.service';
import { Book } from '../ManageBook/book';
import {  ActivatedRoute } from '@angular/router';
import { LoginService } from '../Login/login.service';
import { User } from '../ManageBook/user';
import { SelectMultipleControlValueAccessor } from '@angular/forms';

@Component({
   templateUrl:'./user.component.html',
   styleUrls:['./user.css']
})

export class UserComponent implements OnInit{
p: number = 1;
books:Book[];
use:User;
dte:Date;
    bname:string='';
    cat:string='';
    author:string='';
    price:number;
    quan:number;
    book:Book;
   users:User[];
   finalbook:Book;
   finalbook1:Book;
   fquan:number;
subBooks:string[]=[];
constructor(private _bookService:BookService,private _loginService:LoginService,private _route: ActivatedRoute){
}

getBooks():void{
    this._bookService.getBookList().subscribe(

        (books:any)=>{this.books=books; 
            for (let i=0;i<books.length;i++) {
             for(let j=0;j<books[i].users.length;j++){
                 if(books[i].users[j].id == this._loginService.id){
                  var sdate:Date=new Date(books[i].users[j].date);
                  sdate.setDate(sdate.getDate() + 1);
                  var tdate=new Date();
                  if(tdate >= sdate)
                  {
                      
                     this.unSubscribee(this.books[i].id);

                  }
                  else{
                    this.subBooks.push(books[i].bname);
                  }
                   
                
                 }
             }
            }
              },
        err=>console.log(err)
    );
}

ngOnInit(){
    
    this.getBooks();
    

}
unSubscribee(idd:number){
    
    this.finalbook=this.books.find(x=> x.id == idd);
  
    var fquan:number=this.finalbook.quantity;
    this.quan= fquan+ 1;
    this.users=this.finalbook.users;
    const index = this.users.findIndex(i => i.id == this._loginService.id);
     if (index > -1) {
       this.users.splice(index, 1);
     }
    
    this.book={"bname":this.finalbook.bname, "category":this.finalbook.category, "author":this.finalbook.author, "quantity":this.quan, "price":this.finalbook.price, "id":idd, "users":this.users};
    this._bookService.updateBookList(idd,this.book).subscribe((books:any)=>{this.books=books;this.getBooks();window.alert("UnSubscribed Successfully")},
        err=>console.log(err)
    );

    

}
subscribee(idd:number){
   let id:number;
   let dte:Date;
            this.finalbook=this.books.find(x=> x.id == idd);
                this.quan=this.finalbook.quantity - 1;
                this.users=this.finalbook.users;
                this.dte=new Date();
                this.users.push({"id": this._loginService.id, "date":this.dte});
                this.book={"bname":this.finalbook.bname, "category":this.finalbook.category, "author":this.finalbook.author, "quantity":this.quan, "price":this.finalbook.price, "id":idd, "users":this.users};
                this._bookService.updateBookList(idd,this.book).subscribe((books:any)=>{this.books=books;this.getBooks();window.alert("Subscribed Successfully")},
                    err=>console.log(err)
                );
}
check(name:string){
    var avail:number=0;
    for(let i=0;i<this.subBooks.length;i++){
        if(name == this.subBooks[i]){
            avail= avail+1;
            break;
        }
    }
    if(avail == 1){
        return true;
    }
    else{
        return false;
    }
}
}