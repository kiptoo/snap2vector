import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

/*
  Generated class for the PlatformProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlatformProvider {

  constructor(private platform: Platform) { }

  isMobile() {
    return this.platform.is('cordova');
  }

}
