// import { Component, OnInit } from '@angular/core';
// import { LearnerService } from '../../services/learner.service';
// import { UserStorageService } from 'src/app/service/storage/user-storage.service';

// @Component({
//   selector: 'app-learner-detail',
//   templateUrl: './learner-detail.component.html',
//   styleUrls: ['./learner-detail.component.css']
// })
// export class LearnerDetailComponent implements OnInit {

//   learner: any;
//   learnerId: number | null = null;

//   constructor(private learnerService: LearnerService) { }

//   ngOnInit(): void {
//     const user = UserStorageService.getUser()
//     console.log(user)
//     if (user) {
//       this.learnerId = user.userId
//     }
//     this.getLearnerDetails();
//   }

//   getLearnerDetails(): void {
//     if (this.learnerId) {
//       this.learnerService.getLearnerById(this.learnerId).subscribe(learner => {
//         this.learner = learner;
//       });
//     }
//   }


//   objectKeys(obj: any): string[] {
//     return Object.keys(obj);
//   }
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
  activeTab: string = 'learner-details';
  openAccordions: Set<string> = new Set();

  constructor(private learnerService: LearnerService) { }

  ngOnInit(): void {
    const user = UserStorageService.getUser();
    if (user) {
      this.learnerId = user.userId;
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

  setActiveTab(tabName: string): void {
    this.activeTab = tabName;
  }

  toggleAccordion(courseId: string): void {
    if (this.openAccordions.has(courseId)) {
      this.openAccordions.delete(courseId);
    } else {
      this.openAccordions.add(courseId);
    }
  }

  isAccordionOpen(courseId: string): boolean {
    return this.openAccordions.has(courseId);
  }
}