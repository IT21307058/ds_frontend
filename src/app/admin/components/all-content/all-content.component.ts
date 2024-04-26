import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstructorService } from 'src/app/instructor/services/instructor.service';

@Component({
  selector: 'app-all-content',
  templateUrl: './all-content.component.html',
  styleUrls: ['./all-content.component.css']
})
export class AllContentComponent implements OnInit{
  courseId: number;
  contents: any[] = []; // Assuming you have a Content interface/model

  constructor(private route: ActivatedRoute, private instructorService: InstructorService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params['id'];
      this.loadContents();
    });
  }
  

  loadContents() {
    this.instructorService.getAllContents().subscribe(res => {
      this.contents = res.filter(content => content.status === 'Not Accepted').map(element => ({
        ...element,
        processedImg: 'data:image/jpeg;base64,' + element.byteImg
      }));
    });
  }

  redirectToUpdatePage(contentId: number){
    this.router.navigate([`/admin/updatestatuscontent/`, contentId]);
  }

}
