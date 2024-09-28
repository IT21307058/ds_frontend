import { Component } from '@angular/core';
import { LearnerService } from '../../services/learner.service';
import { MatTableDataSource } from '@angular/material/table';
import { InstructorService } from 'src/app/instructor/services/instructor.service';
import { Router } from '@angular/router';
import { UserStorageService } from 'src/app/service/storage/user-storage.service';

@Component({
  selector: 'app-in-progress-courses',
  templateUrl: './in-progress-courses.component.html',
  styleUrls: ['./in-progress-courses.component.css']
})
export class InProgressCoursesComponent {

  displayedColumns: string[] = ['id', 'CourseName', 'Description', 'actions'];
  products: any;
  dataSource!: MatTableDataSource<any>;
  isLearner: boolean = false;

  // learnerId: number = 12;
  learnerId: number | null = null;

  constructor(private learnerService: LearnerService, private router: Router) { }

  ngOnInit() {
    const user = UserStorageService.getUser()
    console.log(user)
    if (user) {
      this.learnerId = user.userId
    }
    this.getInProgressCourses();

    // check that login user INSTRUCTOR
    if (user && user.role === 'LEARNER') {
      this.isLearner = true;
    } else {
      // if not instructor navigate to Unauthroized page
      this.router.navigate(['/unauthroized']);
    }
  }

  getInProgressCourses() {
    // Assuming you have the learnerId available
    this.learnerService. getInProgressCourses(this.learnerId).subscribe(courses => {
      this.products = courses;
      this.dataSource = new MatTableDataSource(this.products);
    });
  }

  redirectToUpdatePage(courseId: number) {
    this.router.navigate([`/learner/allcontent/`, courseId]);
  }

  redirectToUnEnrollPage(courseId: number, courseName: string) {
    this.router.navigate([`/learner/cancel-enrollment`, { courseId, courseName }]);
  }

  redirectToCompletePage(courseId: number, courseName: string) {
      // Handle response here. For example, navigate to a form page
      this.router.navigate([`/learner/complete-course`, { courseId, courseName }]);
    
  }


}
