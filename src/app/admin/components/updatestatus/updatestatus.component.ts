import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { UserStorageService } from 'src/app/service/storage/user-storage.service';

@Component({
  selector: 'app-updatestatus',
  templateUrl: './updatestatus.component.html',
  styleUrls: ['./updatestatus.component.css']
})
export class UpdatestatusComponent {
  contentId: number;
  productForm: FormGroup; // Declare FormGroup for the form
  isAdmin: boolean = false;

  constructor(
    private adminService: AdminService,
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
      // courseId: ['', Validators.required],
      // contentType: ['', Validators.required],
      // title: ['', Validators.required],
      // description: [''],
      status: ['', Validators.required]
    });

    const user = UserStorageService.getUser()
    if (user && user.role === 'ADMIN') {
      this.isAdmin = true;
    } else {
      this.router.navigate(['/unauthroized']);
    }
  }

  loadContent(contentId: number) {
    this.adminService.getContent(contentId)
      .subscribe(
        (response) => {
          // Populate form controls with fetched content data
          this.productForm.patchValue({
            // courseId: response.id,
            // contentType: response.contentType,
            // title: response.title,
            // description: response.description,
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
      // const updates = {
        // courseId: this.productForm.get('courseId').value,
        // contentType: this.productForm.get('contentType').value,
        // title: this.productForm.get('title').value,
        // description: this.productForm.get('description').value,
        // status: this.productForm.get('status').value
      // };

      const status = this.productForm.get('status').value;


      this.adminService.patchStatusContent(this.contentId, status)
        .subscribe(
          (res) => {
            if (res.id != null) {
              this.snackBar.open('Content status updated Successfully', 'Close', {
                duration: 5000
              });
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
