import { Component, OnInit, ViewChild } from '@angular/core';
import { InstructorService } from '../../services/instructor.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-all-course',
  templateUrl: './all-course.component.html',
  styleUrls: ['./all-course.component.css']
})
export class AllCourseComponent implements OnInit{

  displayedColumns: string[] = ['id','CourseName', 'Description','actions'];
  products: any;
  dataSource!: MatTableDataSource<any>;

  constructor(private instructorService: InstructorService, private router: Router, private snackBar: MatSnackBar){}

  ngOnInit(){
    this.getAllProducts();
  }

  // getAllProducts(){
  //   this.products = [];
  //   this.instructorService.getAllContents().subscribe(res => {
  //     res.forEach(element => {
  //       element.processedImg = 'data:image/jpeg;base64,'+element.byteImg;
  //       this.products.push(element);
  //     })
  //   })
  // }

  // getAllProducts(){
  //   this.products = [];
  //   this.instructorService.getAllCourse().subscribe(res => {
  //     res.forEach(element => {
  //       this.products.push(element);
  //     })
  //   })
  // }

  getAllProducts(){
    this.instructorService.getAllCourse().subscribe(res => {
      this.products = res;
    })
  }

  redirectToUpdatePage(courseId: number) {
    this.router.navigate([`/instructor/courses/`, courseId]);
  }

  redirectToUpPage(courseId: number) {
    this.router.navigate([`/instructor/updatecourse/`, courseId]);
  }

  // getAllCourse(){
  //   this.instructorService.getAllCourse().subscribe({
  //     next: (res) => {
  //       this.dataSource = new MatTableDataSource(res);
  //       this.dataSource.sort = this.sort;
  //       this.dataSource.paginator = this.paginator;
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     }
  //   })
  // }

  deleteCourse(courseId: number){
    this.instructorService.deleteCourse(courseId).subscribe(
      () => {
        this.snackBar.open('Course deleted Successfully', 'Close', {
          duration: 5000
        });
      },
      error => {
        console.error('Error deleting course:', error);
        // Handle error
      }
    );
    
  }



}
