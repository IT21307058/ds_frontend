import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from 'src/app/service/storage/user-storage.service';

const BASIC_URL = "http://localhost:8084/"

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

  deleteCourse(courseId: number): Observable<any> {
    return this.http.delete(BASIC_URL + 'api/instructor/course/' + courseId, {
      headers: this.createAuthorizationHeader(),
    });
  }

  getOneCourse(courseId: number): Observable<any> {
    return this.http.get(BASIC_URL + 'api/instructor/onecourse/' + courseId, {
      headers: this.createAuthorizationHeader(),
    });
  }

  updateCourse(courseId: number, updates: any): Observable<any> {
    return this.http.put(BASIC_URL + 'api/instructor/course/' + courseId, updates, {
      headers: this.createAuthorizationHeader(),
    });
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

  patchContent(contentId: number, updates: any): Observable<any> {
    return this.http.patch(BASIC_URL + 'api/instructor/content/' + contentId, updates, {
      headers: this.createAuthorizationHeader(),
    });
  }

  getContent(contentId: number): Observable<any> {
    return this.http.get(BASIC_URL + 'api/instructor/content/' + contentId, {
      headers: this.createAuthorizationHeader(),
    });
  }

  deleteContent(contentId: number): Observable<any> {
    return this.http.delete(BASIC_URL + 'api/instructor/content/' + contentId, {
      headers: this.createAuthorizationHeader(),
    });
  }

  getLearnerProgressByCourse(learnerId: number): Observable<any> {
    return this.http.get<any>(BASIC_URL + `api/instructor/course/content/progress?learnerId=${learnerId}`);
  }

  private createAuthorizationHeader():HttpHeaders{
    return new HttpHeaders().set(
      "Authorization", "Bearer e" + UserStorageService.getToken()
    )
  }
}
