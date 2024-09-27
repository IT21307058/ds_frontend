import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InstructorService } from '../../services/instructor.service';
import { LearnerService } from 'src/app/learner/services/learner.service';
import { UserStorageService } from 'src/app/service/storage/user-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leaner-progress',
  templateUrl: './leaner-progress.component.html',
  styleUrls: ['./leaner-progress.component.css']
})
export class LeanerProgressComponent implements OnInit{

  learnerIdForm: FormGroup;
  learnerProgress: Map<number, number>;
  learnerprogresses: any[];
  isInstructor: boolean = false;

  constructor(private http: HttpClient,private router: Router, private formBuilder: FormBuilder, private instructorService: InstructorService, private leanerService: LearnerService) { }

  ngOnInit(): void {
    this.learnerIdForm = this.formBuilder.group({
      learnerId: ['', Validators.required] // Assuming learnerId is required
    });

    this.loadleanerprogress();

    const user = UserStorageService.getUser()
    if (user && user.role === 'INSTRUCTOR') {
      this.isInstructor = true;
    } else {
      this.router.navigate(['/unauthroized']);
    }
  }

  getLearnerProgressByCourse(): void {
    const learnerId = this.learnerIdForm.get('learnerId').value;
    // const url = `http://localhost:8084/course/content/progress?learnerId=${learnerId}`;
    this.instructorService.getLearnerProgressByCourse(learnerId).subscribe(
      (response) => {
        this.learnerProgress = response;
        console.log(this.learnerProgress); // You can remove this line, used for debugging
      },
      (error) => {
        console.error('Error fetching learner progress:', error);
      }
    );
  }

  loadleanerprogress(){
    this.leanerService.getAllLeanerProgress().subscribe(res => {
      this.learnerprogresses = res.filter((learner, index, self) =>
        index === self.findIndex((t) => (
          t.learnerId === learner.learnerId
        ))
      );
    })
  }

}
