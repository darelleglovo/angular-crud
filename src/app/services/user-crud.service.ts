import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserCrudService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/api/user';

  addUser(userData) {
  	return this.http.post(this.url + '/signup', userData);
  }

  loginUser(loginData) {
  	return this.http.post(this.url + '/login', loginData);
  }

}
