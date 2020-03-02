import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import {BookService} from '../ManageCatg/book.service';
import { Category } from '../ManageCatg/category';




@Component({
    templateUrl: './manageCat.component.html',
    styleUrls:['./manageCat.css']
})
export class ManageCatComponent implements OnInit { 

   catg:Category[];


    constructor(private _bookService:BookService,private route: ActivatedRoute,private router:Router){
    }
ngOnInit(){
this.getList();

}
    delete(idd:number){
    
    this._bookService.deleteCat(idd).subscribe( ()=>{this.getList();window.alert("Deleted successfully")},
        err=>console.log(err)
    );
    
    }
    goBack(){
       
            this.router.navigate(['./admin']);
        
    }
    getList(){
        this._bookService.getCatList().subscribe(
    
            (cats:any)=>{ this.catg=cats},
            err=>console.log(err)
        );
    }
    }
