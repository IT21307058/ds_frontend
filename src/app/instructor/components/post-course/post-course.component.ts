import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { InstructorService } from '../../services/instructor.service';

@Component({
  selector: 'app-post-course',
  templateUrl: './post-course.component.html',
  styleUrls: ['./post-course.component.css']
})
export class PostCourseComponent {

  courseForm!: FormGroup;

  constructor(
    private fb:FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private instructorService: InstructorService
  ){}

  ngOnInit() :void{
    this.courseForm = this.fb.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
    })
  }

  addCourse(): void{
    if(this.courseForm.valid){
      this.instructorService.addCourse(this.courseForm.value).subscribe((res) => {
        if(res.id != null){
          this.snackBar.open('Course Posted Successfully', 'Close', {
            duration: 5000
          });
          this.router.navigateByUrl('/instructor/addContent');
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
