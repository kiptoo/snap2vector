import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { catchError } from 'rxjs/operators';Observable, from
// import { ErrorHandlerProvider } from './error-handler';
import { api } from './config';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(
    private http: HttpClient,
    // private errorHandler: ErrorHandlerProvider
  ) {
    console.log('Hello DataProvider Provider');
  }

  URL: string = api.SERVER_URL;

  setHeaders(myToken?: string, method?: string) {
    const headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `${myToken}`)
      .set('Access-Control-Allow-Origin', '*');
    return headers;
  }

  setFileHeaders(myToken?: string) {

    const headers: HttpHeaders = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', `${myToken}`)
      .set('Access-Control-Allow-Origin', '*');
    return headers;
  }


  getRequest(endpoint: string) {
    return this.http.get(`${this.URL}/${endpoint}`)
  }


  postRequest(endpoint: string, body: any) {

    return this.http.post(`${this.URL}/${endpoint}`, body)
  }

  postFileRequest(endpoint: string, body: any, params) {

    return this.http.post(`${this.URL}/${endpoint}`, body, {
      params: params
    });
  }

  putRequest(endpoint: string, body: any) {

    return this.http.put(`${this.URL}/${endpoint}`, body);
  }

  deleteRequest(endpoint: string) {

    return this.http.delete(`${this.URL}/${endpoint}`);
  }


}
