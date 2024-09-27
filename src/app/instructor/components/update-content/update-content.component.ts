import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstructorService } from '../../services/instructor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserStorageService } from 'src/app/service/storage/user-storage.service';

@Component({
  selector: 'app-update-content',
  templateUrl: './update-content.component.html',
  styleUrls: ['./update-content.component.css']
})
export class UpdateContentComponent {
  contentId: number;
  productForm: FormGroup; // Declare FormGroup for the form
  isInstructor: boolean = false;

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
      contentType: ['', Validators.required],
      title: ['', Validators.required],
      description: [''],
      status: ['', Validators.required]
    });

    const user = UserStorageService.getUser()
    if (user && user.role === 'INSTRUCTOR') {
      this.isInstructor = true;
    } else {
      this.router.navigate(['/unauthroized']);
    }
  }

  loadContent(contentId: number) {
    this.instructorService.getContent(contentId)
      .subscribe(
        (response) => {
          // Populate form controls with fetched content data
          this.productForm.patchValue({
            courseId: response.dto.courseId,
            contentType: response.contentType,
            title: response.title,
            description: response.description,
            status: response.status
          });
        },
        (error) => {
          console.error('Failed to fetch content', error);
        }
      );
  }

  updateContent() {
    if (this.productForm.valid) {
      const updates = {
        courseId: this.productForm.get('courseId').value,
        contentType: this.productForm.get('contentType').value,
        title: this.productForm.get('title').value,
        description: this.productForm.get('description').value,
        status: this.productForm.get('status').value
      };

      this.instructorService.patchContent(this.contentId, updates)
        .subscribe(
          (res) => {
            if (res.id != null) {
              this.snackBar.open('Content updated Successfully', 'Close', {
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
            console.error('Failed to update content', error);
            this.snackBar.open('Failed to update content', 'ERROR', {
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
