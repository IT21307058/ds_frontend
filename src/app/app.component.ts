import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserStorageService } from './service/storage/user-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tms';
  username: string | null = null;

  // isCustomerLoggedIn : boolean = UserStorageService.isCustomerLoggedIn();
  isAdminLoggedIn: boolean = UserStorageService.isAdminLoggedIn();
  isInstructorLoggedIn: boolean = UserStorageService.isInstructorLoggedIn();
  isLearnerLoggedIn: boolean = UserStorageService.isLearnerLoggedIn();

  constructor(private router: Router) { }

  ngOnInit(): void {
    const user = UserStorageService.getUser()
    console.log(user)
    if (user) {
      this.username = user.username
    }
    // whenever route change also change value
    this.router.events.subscribe(event => {
      // this.isCustomerLoggedIn = UserStorageService.isCustomerLoggedIn();
      this.isAdminLoggedIn = UserStorageService.isAdminLoggedIn();
      this.isInstructorLoggedIn = UserStorageService.isInstructorLoggedIn();
      this.isLearnerLoggedIn = UserStorageService.isLearnerLoggedIn();
    })
  }

  // logout
  logout() {
    UserStorageService.signOut();
    this.router.navigateByUrl('login');
  }
}
