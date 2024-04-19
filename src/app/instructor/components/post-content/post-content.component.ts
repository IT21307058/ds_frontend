import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { InstructorService } from '../../services/instructor.service';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.css']
})
export class PostContentComponent {

  productForm: FormGroup;
  listOfCourses: any[];
  listOfContent: any[];
  selectedFile: File | null;
  imagePreview: String | ArrayBuffer | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private instructorService: InstructorService 
  ){

  }

  onFileSelected(event: any){
    this.selectedFile = event.target.files[0];
    this.previewImage();
  }

  previewImage(){
    const reader = new FileReader();

    reader.onload = () => {
      this.imagePreview = reader.result;
    }
    reader.readAsDataURL(this.selectedFile);
  }

  ngOnInit():void{
    this.productForm = this.fb.group({
      courseId:[null, [Validators.required]],
      contentType: [null, [Validators.required]],
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      status: [null, [Validators.required]],
    })

    // get all categories
    this.getAllCourse();
    this.getAllContent();
  }

  getAllCourse(){
    this.instructorService.getAllCourse().subscribe(res => {
      this.listOfCourses = res;
    })
  }

  getAllContent(){
    this.instructorService.getAllContents().subscribe(res => {
      this.listOfContent = res;
    })
  }

  addContent():void{
    if(this.productForm.valid){
      const formData : FormData = new FormData();

      formData.append("img", this.selectedFile);
      formData.append("courseId", this.productForm.get('courseId').value);
      formData.append("contentType", this.productForm.get('contentType').value);
      formData.append("title", this.productForm.get('title').value);
      formData.append("description", this.productForm.get('description').value);
      formData.append("status", this.productForm.get('status').value);

      this.instructorService.addContent(formData).subscribe((res) => {
        if(res.id != null){
          this.snackBar.open('Product Posted Successfully', 'Close', {
            duration: 5000
          });
          // this.router.navigateByUrl("/instructor/addCourse");
        }else{
          this.snackBar.open(res.message, 'ERROR', {
            duration: 5000
          });
        }
      })
    }else{
      for(const i in this.productForm.controls){
        this.productForm.controls[i].markAsDirty();
        this.productForm.controls[i].updateValueAndValidity();
      }
    }
  }

}
