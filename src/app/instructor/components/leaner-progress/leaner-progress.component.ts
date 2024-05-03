import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstructorService } from '../../services/instructor.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LeanerService } from 'src/app/leaner/services/leaner.service';

@Component({
  selector: 'app-leaner-progress',
  templateUrl: './leaner-progress.component.html',
  styleUrls: ['./leaner-progress.component.css']
})
export class LeanerProgressComponent implements OnInit{

  learnerIdForm: FormGroup;
  learnerProgress: Map<number, number>;
  learnerprogresses: any[];

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private instructorService: InstructorService, private leanerService: LeanerService) { }

  ngOnInit(): void {
    this.learnerIdForm = this.formBuilder.group({
      learnerId: ['', Validators.required] // Assuming learnerId is required
    });

    this.loadleanerprogress();
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
