import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstructorService } from 'src/app/instructor/services/instructor.service';
import { UserStorageService } from 'src/app/service/storage/user-storage.service';

@Component({
  selector: 'app-all-content',
  templateUrl: './all-content.component.html',
  styleUrls: ['./all-content.component.css']
})
export class AllContentComponent implements OnInit{
  courseId: number;
  contents: any[] = [];
  isAdmin: boolean = false;

  constructor(private route: ActivatedRoute, private instructorService: InstructorService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params['id'];
      this.loadContents();
    });

    const user = UserStorageService.getUser()

    if (user && user.role === 'ADMIN') {
      this.isAdmin = true;
    } else {
      this.router.navigate(['/unauthroized']);
    }
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
