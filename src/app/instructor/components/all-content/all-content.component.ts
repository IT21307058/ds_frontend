import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstructorService } from '../../services/instructor.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-all-content',
  templateUrl: './all-content.component.html',
  styleUrls: ['./all-content.component.css']
})
export class AllContentComponent implements OnInit{

  courseId: number;
  contents: any[] = []; // Assuming you have a Content interface/model

  constructor(private route: ActivatedRoute, private instructorService: InstructorService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params['id'];
      this.loadContents();
    });
  }
  

  loadContents() {
    this.instructorService.getAllContentUsingCourse(this.courseId).subscribe(res => {
      // this.contents = contents;
      res.forEach(element => {
        element.processedImg = 'data:image/jpeg;base64,'+element.byteImg;
        this.contents.push(element);
      })
    });
  }

  redirectToUpdatePage(contentId: number){
    this.router.navigate([`/instructor/updatecontent/`, contentId]);
  }

  deleteContent(contentId: number) {
    this.instructorService.deleteContent(contentId).subscribe(() => {
      this.snackBar.open('Content deleted Successfully', 'Close', {
        duration: 5000
      });
    }, error => {
      // Handle error
      console.error('Error deleting content:', error);
    });
  }
}
