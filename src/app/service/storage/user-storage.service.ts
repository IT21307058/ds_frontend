import { Injectable } from '@angular/core';

const TOKEN = "ecom-token";
const USER = "ecom-user";

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }

  // save token in storage
  public saveToken(token: string):void{
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token);
  }

  // save user in storage
  public saveUser(user):void{
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER, JSON.stringify(user));
  }

  // get token from local storage
  static getToken() : string{
    return localStorage.getItem(TOKEN);
  }

  // get user from local storage
  static getUser():any{
    return JSON.parse(localStorage.getItem(USER));
  }

  // get user id from local storage
  static getUserId():string{
    const user = this.getUser();

    if(user == null){
      return "";
    }

    return user.userId;
  }

  // get user role from local storage
  static getUserRole() : string{
    const user = this.getUser();

    if(user == null){
      return "";
    }

    return user.role;
  }

  // check admin login
  static isAdminLoggedIn():boolean{
    if(this.getToken === null){
      return false;
    }

    // role type is string
    const role:string = this.getUserRole();
    // admin login return true
    return role == 'ADMIN';
  }

  // check customer login
  static isCustomerLoggedIn():boolean{
    if(this.getToken === null){
      return false;
    }

    const role:string = this.getUserRole();
    return role == 'CUSTOMER';
  }

  // sign out -> remove token and user
  static signOut() : void{
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USER);
  }
}
