import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LeadService } from '../../service/lead.service';

@Component({
  selector: 'app-posttask',
  templateUrl: './posttask.component.html',
  styleUrls: ['./posttask.component.css']
})
export class PosttaskComponent {

  taskForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private leadService: LeadService
  ) { }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      dueDate: [null, [Validators.required]],
      status: [null, [Validators.required]],
      userId: [null, [Validators.required]]
    })
  }

  addTask(): void {
    if (this.taskForm.valid) {
      this.leadService.addTask(this.taskForm.value).subscribe((res) => {
        if (res.id != null) {
          this.snackBar.open('Task Posted Successfully', 'Close', {
            duration: 5000
          });
          this.router.navigateByUrl('/teamlead/dashboard');
        } else {
          this.snackBar.open(res.message, 'Close', {
            duration: 5000,
            panelClass: 'error-snackbar'
          })
        }
      })
    } else {
      this.taskForm.markAllAsTouched();
    }
  }

}

