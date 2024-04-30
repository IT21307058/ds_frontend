import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from 'src/app/service/storage/user-storage.service';

const BASIC_URL = "http://localhost:8084/"

@Injectable({
  providedIn: 'root'
})
export class LeanerService {

  constructor(private http: HttpClient) { }


  getAllCourse():Observable<any>{
    return this.http.get(BASIC_URL + 'api/instructor/courses', {
      headers: this.createAuthorizationHeader(),
    })
  }

  getAllContentUsingCourse(courseId: number):Observable<any>{
    return this.http.get(BASIC_URL + 'api/instructor/course/'+ courseId, {
      headers: this.createAuthorizationHeader(),
    })
  }

  markContent(leanerDto : any):Observable<any>{
    return this.http.post(BASIC_URL + 'api/instructor/course/content/markcomplete', leanerDto, {
      headers: this.createAuthorizationHeader(),
    })
  }


  private createAuthorizationHeader():HttpHeaders{
    return new HttpHeaders().set(
      "Authorization", "Bearer e" + UserStorageService.getToken()
    )
  }

}
