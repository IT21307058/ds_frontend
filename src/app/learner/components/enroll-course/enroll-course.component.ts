import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LearnerService } from '../../services/learner.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserStorageService } from 'src/app/service/storage/user-storage.service';

@Component({
  selector: 'app-enroll-course',
  templateUrl: './enroll-course.component.html',
  styleUrls: ['./enroll-course.component.css']
})
export class EnrollCourseComponent {

  courseForm!: FormGroup;
  userId: number | null = null;
  courseId:number | null = null;
  courseName:string | null = null;

 
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
  }
  
 
  enroll(): void{
    if(this.courseForm.valid){
      this.learnerService.enrollCourse(this.userId, this.courseId).subscribe(() => { // Call enrollCourse method
        this.snackBar.open('Learner Registered Successfully', 'Close', {
          duration: 5000
        });
        this.router.navigateByUrl('/learner/allcourses'); // Redirect to /learner/allcourses
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
