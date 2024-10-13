import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { InstructorService } from 'src/app/instructor/services/instructor.service';
import { UserStorageService } from 'src/app/service/storage/user-storage.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit {

  displayedColumns: string[] = ['id','CourseName', 'Description','actions'];
  products: any;
  dataSource!: MatTableDataSource<any>;
  // isLearner: boolean = false;

  constructor(private instructorService: InstructorService, private router: Router){}

  ngOnInit(){
    this.getAllProducts();

    // get Login User Details
    const user = UserStorageService.getUser()

    // check that login user INSTRUCTOR
    // if (user && user.role === 'LEARNER') {
    //   this.isLearner = true;
    // } else {
    //   // if not instructor navigate to Unauthroized page
    //   this.router.navigate(['/unauthroized']);
    // }
  }

  

  getAllProducts(){
    this.instructorService.getAllCourse().subscribe(res => {
      this.products = res;
    })
  }

  redirectToUpdatePage(courseId: number) {
    this.router.navigate([`/learner/allcontent/`, courseId]);
  }

  

  redirectToEnrollPage(courseId: number, courseName: string) {
    this.router.navigate([`/learner/enroll-course`, { courseId, courseName }]);
  }



}
