import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CONFIGS } from './config';
import { Network } from '@ionic-native/network/ngx';
import { Platform } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  private idToken: any;
  public orders: any;
  onDevice: boolean;
  headerDict = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Origin': '*'
}


  constructor(
    private http: HttpClient,
    private network: Network,
    private platform:Platform
  ) {
    
     this.onDevice = this.platform.is('cordova');


  }

isOnline(): boolean {
    if (this.onDevice && this.network.type !== 'none') {
        return true;
    } else {
        return navigator.onLine;
    }
}


URL: string = CONFIGS.SERVER_URL;
//URL: string =  CONFIGS.SERVER_URL_LOCAL;

//URL_LOCAL: string = CONFIGS.SERVER_URL_LOCAL;

  // setHeaders(myToken?: string, method?: string) {
  //   const headers: HttpHeaders = new HttpHeaders()
  //     .set('Content-Type', 'application/json')
  //     .set('Authorization', `${myToken}`)
  //     .set('Access-Control-Allow-Origin', '*');
  //   return headers;
  // }
   setHeaders() {
    const headers: HttpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
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
    return this.http.get(`${this.URL}/${endpoint}`);
  }



  postRequest(endpoint: string, body: any) {
   // let options = this.setHeaders();
// let requestOptions = {                                                                                                                                                                                 
//   headers: new Headers(this.headerDict), 
// };

    return this.http.post(`${this.URL}/${endpoint}`, body);
      // return this.http.post(`${this.URL_LOCAL}/${endpoint}`, body,{
      // headers: new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'})});

  }

postpayRequest(endpoint: string, body: any) {
  //let options = this.setHeaders();
//   let requestOptions = {                                                                                                                                                                                 
//   headers: new Headers(this.headerDict), 
// };

return this.http.post(`${this.URL}/${endpoint}`, body);
    // return this.http.post(`${this.URL_LOCAL}/${endpoint}`, body,{
    //   headers: new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'})});
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
