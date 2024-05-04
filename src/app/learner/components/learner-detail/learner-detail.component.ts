// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-learner-detail',
//   templateUrl: './learner-detail.component.html',
//   styleUrls: ['./learner-detail.component.css']
// })
// export class LearnerDetailComponent {

// }




import { Component, OnInit } from '@angular/core';
import { LearnerService } from '../../services/learner.service';

@Component({
  selector: 'app-learner-detail',
  templateUrl: './learner-detail.component.html',
  styleUrls: ['./learner-detail.component.css']
})
export class LearnerDetailComponent implements OnInit {

  learner: any;

  constructor(private learnerService: LearnerService) { }

  ngOnInit(): void {
    this.getLearnerDetails();
  }

  getLearnerDetails(): void {
    this.learnerService.getLearnerById(12).subscribe(learner => {
      this.learner = learner;
    });
  }

  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
