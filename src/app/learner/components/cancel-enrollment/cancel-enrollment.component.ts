import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserStorageService } from 'src/app/service/storage/user-storage.service';
import { LearnerService } from '../../services/learner.service';

@Component({
  selector: 'app-cancel-enrollment',
  templateUrl: './cancel-enrollment.component.html',
  styleUrls: ['./cancel-enrollment.component.css']
})
export class CancelEnrollmentComponent {

  courseForm!: FormGroup;
  userId: number | null = null;
  courseId:number | null = null;
  courseName:string | null = null;
  isLearner: boolean = false;

 
  constructor(
    private route: ActivatedRoute, 
    private fb:FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private learnerService: LearnerService
  ){}
 
  
  ngOnInit() :void{
    this.route.params.subscribe(params => {
      this.courseId = params['courseId'];
      this.courseName = params['courseName'];
    });
    const user = UserStorageService.getUser()
    console.log(user)
    if (user) {
      this.userId = user.userId
    }
   
    this.courseForm = this.fb.group({
      learnerId: [this.userId, [Validators.required]],
      courseId: [this.courseId, [Validators.required]]

    })

    // check that login user INSTRUCTOR
    if (user && user.role === 'LEARNER') {
      this.isLearner = true;
    } else {
      // if not instructor navigate to Unauthroized page
      this.router.navigate(['/unauthroized']);
    }

  }
  
 
  unenroll(): void{
    if(this.courseForm.valid){
      this.learnerService.cancelCourseEnrollment(this.userId, this.courseId).subscribe(() => { // Call cancelCourseEnrollment method
        this.snackBar.open('Course Unenrolled Successfully', 'Close', {
          duration: 5000
        });
        this.router.navigateByUrl('/learner/in-progress-courses'); // Redirect to /learner/in-progress-courses
      }, error => {
        this.snackBar.open(error.message, 'Close', {
          duration: 5000,
          panelClass: 'error-snackbar'
        })
      })
    }else{
      this.courseForm.markAllAsTouched();
    }
  }

}
