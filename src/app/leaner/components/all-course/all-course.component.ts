import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { InstructorService } from 'src/app/instructor/services/instructor.service';
import { LeanerService } from '../../services/leaner.service';

@Component({
  selector: 'app-all-course',
  templateUrl: './all-course.component.html',
  styleUrls: ['./all-course.component.css']
})
export class AllCourseComponent {

  displayedColumns: string[] = ['id','CourseName', 'Description','actions'];
  products: any;
  dataSource!: MatTableDataSource<any>;

  constructor(private leanerService: LeanerService, private router: Router, private snackBar: MatSnackBar){}

  ngOnInit(){
    this.getAllProducts();
  }

  getAllProducts(){
    this.leanerService.getAllCourse().subscribe(res => {
      this.products = res;
    })
  }

  redirectToUpdatePage(courseId: number) {
    this.router.navigate([`/leaner/courses/`, courseId]);
  }
}
