import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
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
        if (element.status === 'Accepted') {
          element.processedImg = 'data:image/jpeg;base64,' + element.byteImg;
          this.contents.push(element);
        }
      })
    });
  }


  redirectToMarkContent(contentId: number) {
    this.router.navigate([`/leaner/markContent/`, this.courseId, contentId]);
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
