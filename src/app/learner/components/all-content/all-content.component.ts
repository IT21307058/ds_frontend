import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstructorService } from 'src/app/instructor/services/instructor.service';
import { UserStorageService } from 'src/app/service/storage/user-storage.service';

@Component({
  selector: 'app-all-content',
  templateUrl: './all-content.component.html',
  styleUrls: ['./all-content.component.css']
})
export class AllContentComponent implements OnInit {


  courseId: number;
  contents: any[] = []; // Assuming you have a Content interface/model
  isLearner: boolean = false;

  constructor(private route: ActivatedRoute, private instructorService: InstructorService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params['id'];
      this.loadContents();
    });

    // get Login User Details
    const user = UserStorageService.getUser()

    // check that login user INSTRUCTOR
    if (user && user.role === 'LEARNER') {
      this.isLearner = true;
    } else {
      // if not instructor navigate to Unauthroized page
      this.router.navigate(['/unauthroized']);
    }
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

  // redirectToUpdatePage(contentId: number){
  //   this.router.navigate([`/instructor/updatecontent/`, contentId]);
  // }

  redirectToMarkContent(contentId: number) {
    this.router.navigate([`/learner/markContent/`, this.courseId, contentId]);
  }

  dataURItoBlob(dataURI: string): Blob {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  }

  downloadImage(base64Data: string, contentId: number) {
    const blob = this.dataURItoBlob(base64Data);
    const url = window.URL.createObjectURL(blob);

    // Create a temporary anchor element
    const a = document.createElement('a');
    a.href = url;
    a.download = `content_${contentId}.jpg`; // Set the filename
    document.body.appendChild(a);
    a.click(); // Trigger the download
    document.body.removeChild(a); // Cleanup
    window.URL.revokeObjectURL(url); // Cleanup
  }


  


}
