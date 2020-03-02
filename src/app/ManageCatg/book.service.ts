import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Category } from './category';
import {Book} from '../ManageBook/book'


@Injectable()

export class BookService{
    private _bookURL="http://localhost:3002/books/";
    private _catURL="http://localhost:3002/category/"
    constructor(private _http:HttpClient){}
    
    getCatList(){ 
    return this._http.get(this._catURL);
    }
    setCatList( cat: Category){
     return this._http.post(this._catURL, cat);
}
    updateCatList(id:number, cat:Category){
    return this._http.put(this._catURL + id ,cat);
}
deleteCat(id:number){
    return this._http.delete(this._catURL + id);
}
deleteBook(id:number){
    return this._http.delete(this._bookURL + id);
}
    getBookList(){ 
    return this._http.get(this._bookURL);
        }
        setBookList(book: Book){
         return this._http.post(this._bookURL, book);
    }
    updateBookList(id:number, book: Book){
        return this._http.put(this._bookURL+ id ,book);
    }
}