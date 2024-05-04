import { Component } from '@angular/core';
import { LearnerService } from '../../services/learner.service';
import { MatTableDataSource } from '@angular/material/table';
import { InstructorService } from 'src/app/instructor/services/instructor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-in-progress-courses',
  templateUrl: './in-progress-courses.component.html',
  styleUrls: ['./in-progress-courses.component.css']
})
export class InProgressCoursesComponent {

  displayedColumns: string[] = ['id', 'CourseName', 'Description', 'actions'];
  products: any;
  dataSource!: MatTableDataSource<any>;

  learnerId: number = 12;

  constructor(private learnerService: LearnerService, private router: Router) { }

  ngOnInit() {
    this.getEnrolledCourses();
  }

  getEnrolledCourses() {
    // Assuming you have the learnerId available
    this.learnerService.getEnrolledCourses(this.learnerId).subscribe(courses => {
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


}
