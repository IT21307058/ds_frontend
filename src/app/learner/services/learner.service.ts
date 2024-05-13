import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserStorageService } from 'src/app/service/storage/user-storage.service';


const BASIC_URL = "http://localhost:8080/api/v1/learners"
const BASIC_URL1 = "http://localhost:8084/"

@Injectable({
  providedIn: 'root'
})
export class LearnerService {

  constructor(private http: HttpClient) { }

  registerLearner(learnerDto: any): Observable<any> {
    return this.http.post(`${BASIC_URL}/register`, learnerDto);
  }

  getLearnerById(learnerId: number): Observable<any> {
    return this.http.get(`${BASIC_URL}/${learnerId}`);
  }

  enrollCourse(learnerId: number, courseId: number): Observable<any> {
    return this.http.post(`${BASIC_URL}/${learnerId}/enroll/${courseId}`, {});
}

cancelCourseEnrollment(learnerId: number, courseId: number): Observable<any> {
  return this.http.delete(`${BASIC_URL}/${learnerId}/unenroll/${courseId}`);
}

completeCourse(learnerId: number, courseId: number): Observable<any> {

  return this.http.post(`${BASIC_URL}/${learnerId}/complete/${courseId}`, {});
}

getInProgressCourses(learnerId: number): Observable<any> {
  return this.http.get(`${BASIC_URL}/${learnerId}/inProgressCourses`);
}

  getEnrolledCoursesCount(learnerId:number):Observable<any>{
    return this.http.get(`${BASIC_URL}/${learnerId}/enrolledCoursesCount`)
  }

  getLearnerProgress(learnerId:number):Observable<any>{
    return this.http.get(`${BASIC_URL}/${learnerId}/progress`)
  }

  getAllCourses(): Observable<any> {
    return this.http.get(`${BASIC_URL}/allCourses`);
  }

  updateCourseProgress(learnerId:number, courseId:number,isCompleted:boolean):Observable<any>{
    return this.http.put(`${BASIC_URL}/${learnerId}/courses/${courseId}/progress`, {isCompleted})
  }

  getAllContentUsingCourse(courseId: number):Observable<any>{
    return this.http.get(BASIC_URL1 + 'api/instructor/course/'+ courseId, {
      headers: this.createAuthorizationHeader(),
    })
  }

  markContent(leanerDto : any):Observable<any>{
    return this.http.post(BASIC_URL1 + 'api/instructor/course/content/markcomplete', leanerDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  getAllLeanerProgress():Observable<any>{
    return this.http.get(BASIC_URL1 + 'api/instructor/learner/all',  {
      headers: this.createAuthorizationHeader(),
    })
  }

  private createAuthorizationHeader():HttpHeaders{
    return new HttpHeaders().set(
      "Authorization", "Bearer e" + UserStorageService.getToken()
    )
  }
  
}
