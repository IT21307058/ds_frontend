import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstructorService } from '../../services/instructor.service';

@Component({
  selector: 'app-all-content',
  templateUrl: './all-content.component.html',
  styleUrls: ['./all-content.component.css']
})
export class AllContentComponent implements OnInit{

  courseId: number;
  contents: any[] = []; // Assuming you have a Content interface/model

  constructor(private route: ActivatedRoute, private instructorService: InstructorService) { }

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
}
