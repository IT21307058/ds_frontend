import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
// import { InstructorService } from 'src/app/instructor/services/instructor.service';
import { LearnerService } from '../../services/learner.service';
import { UserStorageService } from 'src/app/service/storage/user-storage.service';

@Component({
  selector: 'app-register-learner',
  templateUrl: './register-learner.component.html',
  styleUrls: ['./register-learner.component.css']
})
export class RegisterLearnerComponent {

  courseForm!: FormGroup;
  userId: number | null = null;
  email: string | null = null;
  username: string | null = null;
  cardnumber: string | null = null;
 
  constructor(
    private fb:FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private learnerService: LearnerService
  ){}
 
  ngOnInit() :void{
    const user = UserStorageService.getUser()
    console.log(user)
    if (user) {
      this.username = user.username
      this.email = user.email
      this.userId = user.userId
    }
   
    this.courseForm = this.fb.group({
      id: [this.userId, [Validators.required]],
      name: [this.username, [Validators.required]],
      email: [this.email, [Validators.required]],
      cardNumber:['', [Validators.required]]
    })
  }
 
  register(): void{
    if(this.courseForm.valid){
      this.learnerService.registerLearner(this.courseForm.value).subscribe((res) => { // Call registerLearner method
        if(res.id != null){
          this.snackBar.open('Learner Registered Successfully', 'Close', {
            duration: 5000
          });
          this.router.navigateByUrl('/learner/allcourses'); // Redirect to /learner/allcourses
        }else{
          this.snackBar.open(res.message, 'Close', {
            duration: 5000,
            panelClass: 'error-snackbar'
          })
        }
      })
    }else{
      this.courseForm.markAllAsTouched();
    }
  }

}
