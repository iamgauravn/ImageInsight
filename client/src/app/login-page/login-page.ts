import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { retryWhen } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {

  userName: string = ''; 
  password: string = ''; 

  login() {

    if(this.userName.trim() == "" || this.userName.trim() == "") {
      Swal.fire('Failed', 'Username or Password is not Valid!')
      return;
    }

    

  }

}
