import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, CanActivate } from '@angular/router';
import { StorageService } from '../providers/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate {
  constructor(
    private router: Router,
    private storageService: StorageService
  ) {

  }

  async canActivate() {

    const designer = await this.storageService.get('designer');

    if (!designer) {
      this.router.navigate(['login']);
      return false;
    }

    return true;

  }

}
