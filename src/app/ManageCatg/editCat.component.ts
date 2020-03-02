import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";

import {BookService} from './book.service';
import { Category } from './category';


@Component({
    templateUrl: './editCat.component.html',
    styleUrls:['./editCat.css']
})
export class EditCatComponent implements OnInit { 
    id:number;
    cname:string='';
    
cat:Category;
    cats:Category[];
    finalcat:Category;
    constructor(private _bookService:BookService,private route: ActivatedRoute,  private router:Router){
    }

    getCatg(){
        this._bookService.getCatList().subscribe(

            (cats:any)=>{
                this.cats=cats;   
                this.finalcat=this.cats.find(x=> x.id == this.id);
                this.cname=this.finalcat.cname;
            },
            err=>console.log(err)
        );

    }
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
         
            this.id = params['id']; 
          });
          
        this.getCatg();
    
    }
    updateCat(){
        this.cat={"cname":this.cname, "id":this.id};
        this._bookService.updateCatList(this.id,this.cat).subscribe((cats:any)=>{this.cats=cats;this.getCatg();window.alert("Categories updated successfully");this.router.navigate(['/Categories/manage'])},
            err=>console.log(err)
        );

    }
    goBack(){
        this.router.navigate(['./admin']);
    }
}
