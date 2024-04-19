import { Component, OnInit, ViewChild } from '@angular/core';
import { InstructorService } from '../../services/instructor.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-course',
  templateUrl: './all-course.component.html',
  styleUrls: ['./all-course.component.css']
})
export class AllCourseComponent implements OnInit{

  displayedColumns: string[] = ['id','CourseName', 'Description','actions'];
  products: any[] = [];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private instructorService: InstructorService, private router: Router){}

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

  getAllProducts(){
    this.products = [];
    this.instructorService.getAllCourse().subscribe(res => {
      res.forEach(element => {
        this.products.push(element);
      })
    })
  }

  redirectToUpdatePage(courseId: number) {
    this.router.navigate([`/instructor/courses/`, courseId]);
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



}
