import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';
import { UserStorageService } from '../service/storage/user-storage.service';
import { MyHttpClientService } from '../my-http-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  loginForm!: FormGroup;
  hidePassword = true;
  url: string = "";

  constructor(private fb: FormBuilder, 
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router,
    private http: MyHttpClientService){

    }

    ngOnInit() :void{
      this.loginForm = this.fb.group({
        email:['', [Validators.required]],
        password:['', [Validators.required]]
      })

      this.http.get("/auth/url").subscribe((data: any) => this.url = data.authURL);
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
          if(UserStorageService.isInstructorLoggedIn()){
            this.router.navigateByUrl('instructor/addCourse')
          }else if(UserStorageService.isAdminLoggedIn()){
            console.log("successs");
            this.router.navigateByUrl('teamlead/dashboard')
          }
          else if(UserStorageService.isLearnerLoggedIn()){
            console.log("success");
            this.router.navigateByUrl('learner/registerleaner')
          }
          // this.snackBar.open('Login Successfully!!', 'Ok', {duration: 5000});
        },
        (error) => {
          this.snackBar.open('Bad Credentials', 'ERROR', {duration: 5000});
        }
      )
    }

}
