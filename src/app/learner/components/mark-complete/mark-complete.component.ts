import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { UserStorageService } from 'src/app/service/storage/user-storage.service';
import { LearnerService } from '../../services/learner.service';

@Component({
  selector: 'app-mark-complete',
  templateUrl: './mark-complete.component.html',
  styleUrls: ['./mark-complete.component.css']
})
export class MarkCompleteComponent implements OnInit{

  courseForm!: FormGroup;
  courseId:number;
  contentId: number;
  userId: number | null = null;
  isLearner: boolean = false;

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private leanerService: LearnerService,
    private route: ActivatedRoute
  ){}

  ngOnInit() :void{
    const user = UserStorageService.getUser()
    console.log(user)
    if (user) {
      this.userId = user.userId
    }
    
    this.route.params.subscribe(params => {
      this.courseId = params['courseId'];
      this.contentId = params['contentId'];
    });

    this.courseForm = this.fb.group({
      learnerId: [this.userId, [Validators.required]],
      contentId: [this.contentId, [Validators.required]],
      courseId: [this.courseId, [Validators.required]],
    })

    // check that login user INSTRUCTOR
    if (user && user.role === 'LEARNER') {
      this.isLearner = true;
    } else {
      // if not instructor navigate to Unauthroized page
      this.router.navigate(['/unauthroized']);
    }
  }

  markContent(): void{
    if(this.courseForm.valid){
      this.leanerService.markContent(this.courseForm.value).subscribe((res) => {
        if(res.id != null){
          this.snackBar.open('Mark Content add Successfully', 'Close', {
            duration: 5000
          });
          this.router.navigateByUrl('/learner/allcourses');
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
