import { Component } from '@angular/core';
import { LoginService } from './Login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LibraryMgmt';
  constructor(private loginService:LoginService, private router:Router){
    
  }

  logout(){
    this.loginService.isLoggedin=false;
    this.router.navigate(['/']);
  }
  
  
}
