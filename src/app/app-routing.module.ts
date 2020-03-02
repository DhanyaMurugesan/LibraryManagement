import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './About/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './Login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AddCatComponent } from './ManageCatg/addCat.component';
import { AddBookComponent } from './ManageBook/addBook.component';
import { ManageCatComponent } from './ManageCatg/manageCat.component';
import { ManageBookComponent } from './ManageBook/manageBook.component';
import { EditBookComponent } from './ManageBook/editBook.component';
import { EditCatComponent } from './ManageCatg/editCat.component';
import { UserComponent } from './User/user.component';
import { IssuedBookComponent } from './ManageBook/issuedBooks.component';
import { LoginGuardService } from './login_gaurdservice';


const routes: Routes = [
  
    { path: '', component: AboutComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'admin',  canActivate:[LoginGuardService],component: AdminComponent },
    { path: 'Categories', canActivate:[LoginGuardService],component: AddCatComponent },
    { path: 'Books', canActivate:[LoginGuardService], component: AddBookComponent },
    { path: 'Categories/manage', canActivate:[LoginGuardService], component: ManageCatComponent },
    { path: 'Books/manage', canActivate:[LoginGuardService], component: ManageBookComponent },
    { path: 'Books/manage/:id', canActivate:[LoginGuardService], component: EditBookComponent },
    { path: 'Categories/manage/:id', canActivate:[LoginGuardService], component: EditCatComponent },
    { path: 'user',  canActivate:[LoginGuardService],component: UserComponent },
    { path: 'admin/issuedBook', canActivate:[LoginGuardService], component: IssuedBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 