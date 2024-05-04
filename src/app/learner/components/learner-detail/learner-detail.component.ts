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
import { UserStorageService } from 'src/app/service/storage/user-storage.service';

@Component({
  selector: 'app-learner-detail',
  templateUrl: './learner-detail.component.html',
  styleUrls: ['./learner-detail.component.css']
})
export class LearnerDetailComponent implements OnInit {

  learner: any;
  learnerId: number | null = null;

  constructor(private learnerService: LearnerService) { }

  ngOnInit(): void {
    const user = UserStorageService.getUser()
    console.log(user)
    if (user) {
      this.learnerId = user.userId
    }
    this.getLearnerDetails();
  }

  getLearnerDetails(): void {
    if (this.learnerId) {
      this.learnerService.getLearnerById(this.learnerId).subscribe(learner => {
        this.learner = learner;
      });
    }
  }


  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
