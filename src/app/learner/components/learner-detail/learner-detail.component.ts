// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-learner-detail',
//   templateUrl: './learner-detail.component.html',
//   styleUrls: ['./learner-detail.component.css']
// })
// export class LearnerDetailComponent {

// }




import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learner-detail',
  templateUrl: './learner-detail.component.html',
  styleUrls: ['./learner-detail.component.css']
})
export class LearnerDetailComponent implements OnInit {

  learner: any;
  enrolledCourses: any[] = [];
  completedCourses: string[] = [];
  inProgressCourses: string[] = [];
  enrolledCourseCount: number = 0;
  completedCourseCount: number = 0;
  inProgressCourseCount: number = 0;

  constructor() { }

  ngOnInit(): void {
    // Initialize learner data
    this.learner = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      enrolledCourses: [
        { name: 'Course A', price: 50 },
        { name: 'Course B', price: 60 },
        { name: 'Course C', price: 70 }
      ],
      completedCourses: ['Course D', 'Course E'],
      inProgressCourses: ['Course F', 'Course G']
    };

    // Update enrolled courses array and counts
    this.enrolledCourses = this.learner.enrolledCourses;
    this.enrolledCourseCount = this.enrolledCourses.length;

    // Update completed courses array and count
    this.completedCourses = this.learner.completedCourses;
    this.completedCourseCount = this.completedCourses.length;

    // Update in-progress courses array and count
    this.inProgressCourses = this.learner.inProgressCourses;
    this.inProgressCourseCount = this.inProgressCourses.length;
  }
}
