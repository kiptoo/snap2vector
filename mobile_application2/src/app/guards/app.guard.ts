import { Injectable,OnInit } from '@angular/core';
import { ActivatedRouteSnapshot,Router, CanActivate } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { StorageService } from 'src/app/providers/storage.service';
import { first } from 'rxjs/operators';
//import { StorageService } from '../providers/storage.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppGuard implements CanActivate {
  user:any;
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private storageService: StorageService
  ) {
   
 
  }
isLoggedIn() {
   return this.afAuth.authState.pipe(first()).toPromise();
}

  async canActivate() {
    // return this.afAuth.authState.pipe(
    //   map((user) => {
    //     if (!user) {
    //       this.router.navigate(['/login']);
    //       return false;
    //     }
    //     return true;
    //   })
    // )
    //const designer = await this.storageService.get('designer');
    const designer =await this.isLoggedIn().then((res) =>{
      this.user=res;
       console.log(res);
      return res;

    });
    // const designer = await this.afAuth.authState.subscribe((res) => {
    //   console.log(res);
    //   this.user=res;
 // console.log(designer.then(res =>{return this.user=res}));
  console.log(designer);
   console.log(this.user);
   if (this.user!=null) {
        if (!this.user.uid) {
          console.log("its not there");
      this.router.navigate(['login']);
      return false;
    }
    else{
      console.log("its  there");
        return true;
    }
    }
    else{
      this.router.navigate(['login']);
 return false;
  }

      //return res;
       
   // });
// console.log(this.user);
// console.log(this.user.uid);
//       if (!this.user.uid) {
//       this.router.navigate(['login']);
//       return false;
//     }

//     return true;
 console.log(designer);

   

}



}
