import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LearnerService } from '../../services/learner.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserStorageService } from 'src/app/service/storage/user-storage.service';
import {EmailToastComponent} from "../../../email-toast/email-toast.component";

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


  enroll(): void {
    if (this.courseForm.valid) {
      this.learnerService.enrollCourse(this.userId, this.courseId).subscribe(
        () => {
          console.log('Enrollment successful, redirecting to payment gateway...');
          // Uncomment the notification if needed
          // this.snackBar.openFromComponent(EmailToastComponent, {
          //   duration: 5000,
          //   horizontalPosition: 'end',
          //   verticalPosition: 'top',
          //   panelClass: ['email-toast']
          // });
          // Uncomment the router navigation if needed
          // this.router.navigateByUrl('/learner/allcourses');
          window.location.href = 'http://localhost:9090/';
        },
        (error) => {
          console.log('Enrollment failed:', error);
          if (error.error === 'Learner is already enrolled in the course') {
            this.snackBar.open('You are already enrolled in this course', 'Close', {
              duration: 5000,
              panelClass: 'error-snackbar'
            });
          } else {
            this.snackBar.open(error.error, 'Close', {
              duration: 5000,
              panelClass: 'error-snackbar'
            });
          }
        }
      );
    } else {
      this.courseForm.markAllAsTouched();
    }
  }
  

//   redirectToEnrollPage() {
//     window.location.href = 'http://localhost:9090/';
// }


}
