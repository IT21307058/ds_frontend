import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';
import { UserStorageService } from '../service/storage/user-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  loginForm!: FormGroup;
  hidePassword = true;

  constructor(private fb: FormBuilder, 
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router){

    }

    ngOnInit() :void{
      this.loginForm = this.fb.group({
        email:['', [Validators.required]],
        password:['', [Validators.required]]
      })
    }

    togglePasswordVisibility(){
      this.hidePassword = !this.hidePassword;
    }

    onSubmit():void{
      // (!) used = It is used when you are confident that a certain expression 
      // will not result in a null or undefined value.
      const username = this.loginForm.get("email")!.value;
      const password = this.loginForm.get("password")!.value;

      this.authService.login(username, password).subscribe(
        (res) => {
          // redirect specfic role to specfic UI
          if(UserStorageService.isAdminLoggedIn()){
            this.router.navigateByUrl('teamlead/dashboard')
          }else if(UserStorageService.isCustomerLoggedIn()){
            console.log("successs");
            this.router.navigateByUrl('member/dashboard')
          }
          // this.snackBar.open('Login Successfully!!', 'Ok', {duration: 5000});
        },
        (error) => {
          this.snackBar.open('Bad Credentials', 'ERROR', {duration: 5000});
        }
      )
    }

}
