import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './About/about.component';
import { LoginComponent } from './Login/login.component';
import { RegService } from './register/register.service';
import { LoginService } from './Login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { AddCatComponent } from './ManageCatg/addCat.component';
import { BookService } from './ManageCatg/book.service';
import { AddBookComponent } from './ManageBook/addBook.component';
import { FormsModule } from '@angular/forms';
import { ManageBookComponent } from './ManageBook/manageBook.component';
import { ManageCatComponent } from './ManageCatg/manageCat.component';
import { EditBookComponent } from './ManageBook/editBook.component';
import { EditCatComponent } from './ManageCatg/editCat.component';
import { UserComponent } from './User/user.component';
import { FilterPipe } from './User/searchFilter.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { IssuedBookComponent } from './ManageBook/issuedBooks.component';
import { LoginGuardService } from './login_gaurdservice';

@NgModule({
  declarations: [
    AppComponent, AboutComponent, LoginComponent, RegisterComponent, AdminComponent, FilterPipe, IssuedBookComponent,
    AddCatComponent, AddBookComponent, ManageBookComponent, ManageCatComponent, EditBookComponent,EditCatComponent,UserComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [ LoginService , RegService, BookService,LoginGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
