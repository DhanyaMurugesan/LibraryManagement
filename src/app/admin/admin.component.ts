import { Component } from '@angular/core';
import {OptionLib} from './option';

@Component({

  templateUrl: './admin.component.html',
  styleUrls:['./admin.css']
})
export class AdminComponent {
  

titles:OptionLib[]=[
    {division: "Categories", image: "fa fa-list-alt"} ,
    {division: "Books", image: "fa fa-book"}
  
]
}
