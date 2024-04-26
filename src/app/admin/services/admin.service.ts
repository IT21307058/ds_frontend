import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from 'src/app/service/storage/user-storage.service';

const BASIC_URL = "http://localhost:8084/"

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAllContents():Observable<any>{
    return this.http.get(BASIC_URL + 'api/instructor/contents', {
      headers: this.createAuthorizationHeader(),
    })
  }

  patchStatusContent(contentId: number, updates: any): Observable<any> {
    return this.http.patch(BASIC_URL + 'api/instructor/content/status/' + contentId, updates, {
      headers: this.createAuthorizationHeader(),
    });
  }

  getContent(contentId: number): Observable<any> {
    return this.http.get(BASIC_URL + 'api/instructor/content/' + contentId, {
      headers: this.createAuthorizationHeader(),
    });
  }

  private createAuthorizationHeader():HttpHeaders{
    return new HttpHeaders().set(
      "Authorization", "Bearer e" + UserStorageService.getToken()
    )
  }
  
}
