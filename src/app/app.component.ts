import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserStorageService } from './service/storage/user-storage.service';
import { MyHttpClientService } from './my-http-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tms';

  // isCustomerLoggedIn : boolean = UserStorageService.isCustomerLoggedIn();
  isAdminLoggedIn: boolean = UserStorageService.isAdminLoggedIn();
  isInstructorLoggedIn: boolean = UserStorageService.isInstructorLoggedIn();
  isLearnerLoggedIn: boolean = UserStorageService.isLearnerLoggedIn();
  componentToShow: any;

  constructor(private router: Router, private http: MyHttpClientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // whenever route change also change value
    this.router.events.subscribe(event => {
      // this.isCustomerLoggedIn = UserStorageService.isCustomerLoggedIn();
      this.isAdminLoggedIn = UserStorageService.isAdminLoggedIn();
      this.isInstructorLoggedIn = UserStorageService.isInstructorLoggedIn();
      this.isLearnerLoggedIn = UserStorageService.isLearnerLoggedIn();
    })

    this.route.queryParams
      .subscribe(params => {
          if (params["code"] !== undefined) {
            this.http.getToken(params["code"]).subscribe(result => {
              if (result === true) {
                this.componentToShow = "private";
              } else {
                this.componentToShow = "public";
              }
            });
          }
        }
      );
  }

  // logout
  logout() {
    UserStorageService.signOut();
    this.router.navigateByUrl('login');
  }
}
