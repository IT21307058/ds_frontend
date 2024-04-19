import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from 'src/app/service/storage/user-storage.service';

const BASIC_URL = "http://localhost:8083/"

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor(private http: HttpClient) { }

  addCourse(courseDto: any):Observable<any>{
    return this.http.post(BASIC_URL + 'api/instructor/course', courseDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  getAllCourse():Observable<any>{
    return this.http.get(BASIC_URL + 'api/instructor/courses', {
      headers: this.createAuthorizationHeader(),
    })
  }

  addContent(contentDto : any):Observable<any>{
    return this.http.post(BASIC_URL + 'api/instructor/content', contentDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  getAllContents():Observable<any>{
    return this.http.get(BASIC_URL + 'api/instructor/contents', {
      headers: this.createAuthorizationHeader(),
    })
  }

  getAllContentUsingCourse(courseId: number):Observable<any>{
    return this.http.get(BASIC_URL + 'api/instructor/course/'+ courseId, {
      headers: this.createAuthorizationHeader(),
    })
  }

  private createAuthorizationHeader():HttpHeaders{
    return new HttpHeaders().set(
      "Authorization", "Bearer e" + UserStorageService.getToken()
    )
  }
}
