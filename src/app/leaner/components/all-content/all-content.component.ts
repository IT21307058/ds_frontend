import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { InstructorService } from 'src/app/instructor/services/instructor.service';
import { LeanerService } from '../../services/leaner.service';

@Component({
  selector: 'app-all-content',
  templateUrl: './all-content.component.html',
  styleUrls: ['./all-content.component.css']
})
export class AllContentComponent {

  courseId: number;
  contents: any[] = [];

  constructor(private route: ActivatedRoute, private leanerService: LeanerService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params['id'];
      this.loadContents();
    });
  }
  

  loadContents() {
    this.leanerService.getAllContentUsingCourse(this.courseId).subscribe(res => {
      // this.contents = contents;
      res.forEach(element => {
        if(element.status === 'Accepted'){
          element.processedImg = 'data:image/jpeg;base64,'+element.byteImg;
          this.contents.push(element);
        }
      })
    });
  }

  redirectToMarkContent(contentId: number){
    this.router.navigate([`/leaner/markContent/`, this.courseId, contentId]);
  }

}
