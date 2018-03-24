import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router, CanActivate } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { baseUrl } from '../httpBaseUrl/httpBaseUrl';
// import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {

  constructor(public http: HttpClient, ) { }

  login(payload) {
    const endPoint = baseUrl + '/admin/login';
    return this.http.post(endPoint, payload);
  }

  contact(payload) {
    const endPoint = baseUrl + '/contactFormSubmit';
    return this.http.post(endPoint, payload);
  }

  // public isAuthenticated(): boolean {
  //   const token = localStorage.getItem('token');
  //   // Check whether the token is expired and return
  //   // true or false
  //   return !this.jwtHelper.isTokenExpired(token);
  // }

}

