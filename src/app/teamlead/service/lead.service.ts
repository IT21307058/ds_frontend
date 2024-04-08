import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from 'src/app/service/storage/user-storage.service';

const BASIC_URL = "http://localhost:9097/"

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  constructor(private http: HttpClient) { }

  addTask(taskDto: any):Observable<any>{
    return this.http.post(BASIC_URL + 'api/task/', taskDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  getAllTask():Observable<any>{
    return this.http.get(BASIC_URL + 'api/task/', {
      headers: this.createAuthorizationHeader(),
    })
  }

  deleteTask(taskId: number):Observable<any>{
    return this.http.delete(BASIC_URL + 'api/task/' + taskId, {
      headers: this.createAuthorizationHeader(),
    })
  }

  private createAuthorizationHeader():HttpHeaders{
    return new HttpHeaders().set(
      "Authorization", "Bearer e" + UserStorageService.getToken()
    )
  }
}
