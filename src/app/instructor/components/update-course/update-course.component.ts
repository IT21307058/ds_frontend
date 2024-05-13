import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { InstructorService } from '../../services/instructor.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent {

  contentId: number;
  productForm: FormGroup; // Declare FormGroup for the form

  constructor(
    private instructorService: InstructorService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.contentId = params['id'];
      this.loadContent(this.contentId); // Call method to load content details
    });

    // Initialize contentForm with form controls
    this.productForm = this.formBuilder.group({
      courseId: ['', Validators.required],
      courseName: ['', Validators.required],
      description: ['', Validators.required],
      coursePrice: ['', Validators.required]
    });
  }

  loadContent(courseId: number) {
    this.instructorService.getOneCourse(courseId)
      .subscribe(
        (response) => {
          // Populate form controls with fetched content data
          this.productForm.patchValue({
            courseId: response.id,
            courseName: response.name,
            description: response.description,
            coursePrice: response.coursePrice
          });
        },
        (error) => {
          console.error('Failed to fetch course', error);
        }
      );
  }

  updateCourse() {
    if (this.productForm.valid) {
      const updates = {
        courseId: this.productForm.get('courseId').value,
        name: this.productForm.get('courseName').value,
        description: this.productForm.get('description').value,
        coursePrice: this.productForm.get('coursePrice').value,
      };

      this.instructorService.updateCourse(this.contentId, updates)
        .subscribe(
          (res) => {
            if (res.id != null) {
              this.snackBar.open('Course updated Successfully', 'Close', {
                duration: 5000
              });
              this.router.navigateByUrl('/instructor/allCourse');
            } else {
              this.snackBar.open(res.message, 'ERROR', {
                duration: 5000
              });
            }
          },
          (error) => {
            console.error('Failed to update course', error);
            this.snackBar.open('Failed to update course', 'ERROR', {
              duration: 5000
            });
          }
        );
    } else {
      // If form is invalid, mark all fields as dirty to display validation errors
      Object.values(this.productForm.controls).forEach(control => {
        control.markAsDirty();
      });
    }
  }

}
