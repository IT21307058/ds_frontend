import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LeanerService } from '../../services/leaner.service';

@Component({
  selector: 'app-mark-complete',
  templateUrl: './mark-complete.component.html',
  styleUrls: ['./mark-complete.component.css']
})
export class MarkCompleteComponent implements OnInit{

  courseForm!: FormGroup;
  courseId:number;
  contentId: number;

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private leanerService: LeanerService,
    private route: ActivatedRoute
  ){}

  ngOnInit() :void{
    this.route.params.subscribe(params => {
      this.courseId = params['courseId'];
      this.contentId = params['contentId'];
    });

    this.courseForm = this.fb.group({
      learnerId: [null, [Validators.required]],
      contentId: [this.contentId, [Validators.required]],
      courseId: [this.courseId, [Validators.required]],
    })
  }

  markContent(): void{
    if(this.courseForm.valid){
      this.leanerService.markContent(this.courseForm.value).subscribe((res) => {
        if(res.id != null){
          this.snackBar.open('Mark Content add Successfully', 'Close', {
            duration: 5000
          });
          this.router.navigateByUrl('/leaner/allCourse');
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
