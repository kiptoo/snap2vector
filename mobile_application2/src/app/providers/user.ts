import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Platform } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import {GooglePlus} from "@ionic-native/google-plus/ngx";
import { Badge } from '@ionic-native/badge/ngx';
import {asObservable} from "./asObservable";
import {BehaviorSubject} from "rxjs/Rx";
import { CONFIGS } from './config';
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
// import {Observable} from 'rxjs/Rx';
//import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';


/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

public thebudge: any;
//private budgenumber: Subject<number>;
private budgenumber: BehaviorSubject<number>;
private _budgenumber: Observable<number>;

// googleData = {
//     clientId: '942240372918-669v8nknrpkq02np67hkvbgf08q8jhl0.apps.googleusercontent.com',
//     clientSecret: 'wsnVP_S43h7ZoTYVIyXdoDuH'
//   } 
googleData =   CONFIGS.googleOAth;


  constructor(
    private dataService: DataService,
    public badge: Badge,
    private platform: Platform,
    private afAuth: AngularFireAuth,
    private googleNative: GooglePlus
   // private fAuth: FirebaseAuthentication,
  ) { 
  //  this.badge.set(0);
 //this.thebudge=10;

    //this.budgenumber = new Subject();
    this.budgenumber  = new BehaviorSubject(10);

    this._budgenumber = this.budgenumber.asObservable();
     firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Google Access Token.
    // You can use it to access the Google API.
    //var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user);
    // ...
  }
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
});

//this.badgeset(2);

  }

  
 get listnumber(){
    return this.budgenumber
  }

    // get listnumber() {
    //     return asObservable(this.budgenumber);
    // }
  // private socialSignIn(provider): Promise<any> {
  //   if (this.platform.is('cordova')) {
  //     return firebase.auth().signInWithRedirect(provider)
  //       .then((data: any) => {
  //         return firebase.auth().getRedirectResult();
  //       });
  //   } else {
  //     return this.fAuth.signInWithGoogle(this.googleData.clientId, this.googleData.clientSecret)
  //       .then((credential) => {
  //         return credential;
  //       });
  //   }
  // }

  async googleLogin(): Promise<firebase.User> {
   // return this.socialSignIn(new firebase.auth.GoogleAuthProvider);
   //return this.doGoogleLogin();
   if (this.platform.is('cordova')) {
    console.log("Native signin");
      return this.nativeSignIn();

    } else {
      //this.webSignIn();
       return this.doGoogleLogin();
    }
  }
   doGoogleLogin(){
  return new Promise<any>((resolve, reject) => {
   let provider = new firebase.auth.GoogleAuthProvider();

 //   firebase.auth().signInWithPopup(provider).then(function() {
 // //firebase.auth().signInWithRedirect(provider).then(function() {
 //         // return firebase.auth().getRedirectResult();
 //        }).then(function(result) {
 //          // This gives you a Google Access Token.
 //          // You can use it to access the Google API.
 //          //var token = result.credential.accessToken;
 //          // The signed-in user info.
 //          var user = result.user;
 //          resolve(result);
 //          // ...
 //        }).catch(function(error) {
 //          // Handle Errors here.
 //          var errorCode = error.code;
 //          var errorMessage = error.message;
 //        });
    provider.addScope('profile');
    provider.addScope('email');
    this.afAuth.auth
    .signInWithPopup(provider)
    .then(res => {
      console.log(res);
      resolve(res);
    })
  })
}
async badgeset(num){
  console.log("setting budge number");

  let x= parseInt(num, 10);
   console.log(x);
  this.badge.set(x);
//let budges= await this.badge.get();
this.thebudge=num;
let budges= this.thebudge;
console.log(budges);
let no=parseInt(budges, 10);
console.log(no);
this.budgenumber.next(no);//next method updates the stream value
}
async badgeincrement(){
 console.log("setting budge increment");
  //let x= parseInt(num, 10);
 //  console.log(x);
  //this.badge.set(x);
//let budges= await  this.badge.increase(1);
let bj=parseInt(this.thebudge, 10);
console.log(bj);
let budges =(bj+1);
this.thebudge=budges;
console.log(budges);
//let no=parseInt(budges, 10);
 this.budgenumber.next(budges);//next method updates the stream value
}
async badgeclear(){
  this.badge.clear();
 let budges= await this.badge.get();
 //this.thebudge=0;
//let budges= this.thebudge;
console.log(budges);
let no=parseInt(budges, 10)
this.budgenumber.next(no);//next method updates the stream value
}



  // signIn() {
  //   if (this.platform.is('cordova')) {
  //     this.nativeSignIn();
  //   } else {
  //     this.webSignIn();
  //   }
  // }

  async nativeSignIn() {
     console.log("In native sign in ");
     console.log(this.googleData.clientId,);
      
  return new Promise<any>((resolve, reject) => {
   let provider = new firebase.auth.GoogleAuthProvider();
       this.googleNative.login({
    'webClientId': this.googleData.clientId,
    'offline': true
  }).then( res => {
    //console.log();
    console.log(res);
          const googleCredential = firebase.auth.GoogleAuthProvider
              .credential(res.idToken);
 
          this.afAuth.auth.signInWithCredential(googleCredential)
        .then( response => {
            console.log("Firebase success: " + JSON.stringify(response));
           resolve(response);

        });
  }, err => {
      console.error("Error: ", err)
      reject(err);
  });

   
  });
}

// async nativeSignIn() {
//     try {
//       const credentials = await this.googleNative.login({
//         'webClientId':this.googleData.clientId
//       });
//      return  await this.afAuth.auth.signInWithCredential(
//         firebase.auth.GoogleAuthProvider.credential(credentials.idToken)
//       );
//     } catch (e) {
//       console.log(e);
//     }
//   }



  // async webSignIn() {
  //   try {
  //     await this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  //   } catch(e) {
  //     console.log(e)
  //   }
  // }

  signOut() {
    this.afAuth.auth.signOut();
    if (this.platform.is('android')) {
      this.googleNative.logout();
    }

  }
//   doGoogleLogin(){
//   return new Promise<any>((resolve, reject) => {
//    let provider = new firebase.auth.GoogleAuthProvider();
//     provider.addScope('profile');
//     provider.addScope('email');
//     this.afAuth.auth
//     .signInWithPopup(provider)
//     .then(res => {
//       console.log(res);
//       resolve(res);
//     })
//   })
// }


//   loginUser(): Promise<any>  {
//     let prom:any;
//   this.googlePlus.login({
//     'webClientId': '942240372918-669v8nknrpkq02np67hkvbgf08q8jhl0.apps.googleusercontent.com',
//     'offline': true
//   }).then( res => {
//           const googleCredential = firebase.auth.GoogleAuthProvider
//               .credential(res.idToken);
 
//           firebase.auth().signInWithCredential(googleCredential)
//         .then( response => {

//           prom= response;
//             console.log("Firebase success: " + JSON.stringify(response))
//         });
//   }, err => {
//      prom= err;
//       console.error("Error: ", err)
//   });

//   return prom;
// }


  public emailLogin(tok) {
    return this.dataService.getRequest('users/');
  }
   public getinbox(userId) {
    //this.budgenumber=21;
    return this.dataService.getRequest(`inbox/${userId}`);
  }
     public getvector(orderId) {
    //this.budgenumber=21;
    return this.dataService.getRequest(`vectors/${orderId}`);
  }
    public sendinbox(data) {
       console.log("user inbox sending");
      console.log(data);
    return this.dataService.postRequest('inbox/',data);
  }

   public getcoupons() {
//this.budgenumber=21;
    return this.dataService.getRequest('coupons/');
  }
    public applycoupon(userId,coupon) {
    return this.dataService.putRequest(`coupons/applydiscount/${userId}`,coupon);
  }

   public byemailLogin(email) {
    return this.dataService.getRequest(`users/byemail/${email}`);
  }

  public getUser(userId) {
    return this.dataService.getRequest(`users/${userId}`);
  }

  public emailRegister(userObj: any, tok) {
  //public emailRegister(userObj: any) {
    return this.dataService.postRequest('users/', userObj);
  }

  public forgotPassword(email: String) {
    return this.dataService.postRequest('forget-password/', email);
  }

  addCardDetails(card, userId) {
    return this.dataService.putRequest(`users/createcard/${userId}`, card);
  }
  registerToken(token, userId) {

    return this.dataService.putRequest(`users/${userId}`, token);
  }
   updatecredit(source,userId) {

    return this.dataService.putRequest(`users/updatecard/${userId}`,source);

  }

  deleteCardDetails(user) {
    return this.dataService.putRequest(`users/${user.uid}`, user);
  }


  deletePhoneDetails(user) {
    return this.dataService.putRequest(`users/${user.uid}`, user);
  }

  addPhoneDetails(user,userId) {
    //console.log(user.uid);
    return this.dataService.putRequest(`users/phone/${userId}`, user);
  }
   addCompanyDetails(user,userId) {
    //console.log(user.uid);
    return this.dataService.putRequest(`users/company/${userId}`, user);
  }

  postToken(token, userId) {
    const data = { token, userId };
    return this.dataService.putRequest(`store_token/`, data);
  }

  checkAndUpdate(user) {
    return this.dataService.postRequest(`users/`, user);
  }

}
