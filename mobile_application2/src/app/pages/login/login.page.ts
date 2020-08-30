import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as firebase from 'firebase/app';
import { StorageService } from 'src/app/providers/storage.service';
import { NavController, AlertController, Events, ModalController, Platform } from '@ionic/angular';
import { LoadingService } from 'src/app/providers/loading.service';
import { ToastService } from 'src/app/providers/toast.service';
import { TitleCasePipe } from '@angular/common';
import { UserProvider } from 'src/app/providers/user';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy.page';
//import {GooglePlus} from "@ionic-native/google-plus";
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { DataService } from 'src/app/providers/data.service';

//import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  email:any;
  coupons:any;

  constructor(
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private navCtrl: NavController,
    private loadingService: LoadingService,
    public forgotCtrl: AlertController,
     private dataService:DataService,
    private storageService: StorageService,
    private titlecasePipe: TitleCasePipe,
    private user: UserProvider,
    private events: Events,
    private modalCtrl: ModalController,
    private router: Router,
   // private fAuth: FirebaseAuthentication,
   private afAuth: AngularFireAuth,
    private platform: Platform
  ) {

    // this.user.getcoupons().subscribe((coupons) =>{
    //   console.log(coupons); 
    //   let coup=coupons.data;
    //   let active_coupons:any =[];
    //   let len=Object.keys(coup).length;
    // for (var i = 0; i < len; i++) {
    //   let coupon=coup[i];
    //  //  let today=new Date();
    //  //  console.log(today); 
    //  // console.log(coupon);
    //  //  console.log('redeam bÿ:'+new Date(coupon.redeem_by));
    //  //   console.log('created on:'+ new Date(coupon.created));
    //  //   console.log('duration in months:'+coupon.duration_in_months);
    //    if(coupon.valid){
    //      console.log('valid');
    //     active_coupons.push(coupon);

    //    }
       
    // }
    // this.coupons=active_coupons;
    // this.storageService.set('coupons', this.coupons).catch((e) =>{
    //                   //console.log(e);
    //                   console.log(e);
    //                   // this.loadingService.dismissLoading();
    //     // this.toastService.presentToast('You Device is out of space,Clear space and try again ','danger');
    //                 });
    // console.log(this.coupons);


    // });
    
//     this.afAuth.authState.subscribe((res) => {
//   if (res) {
//     console.log('user logged in, store your user in some variable')
//     //this.user = res;  
//     console.log(res);

//   }
// });

  

   }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

//      firebase.auth().getRedirectResult().then(function(result) {
//   if (result.credential) {
//     // This gives you a Google Access Token.
//     // You can use it to access the Google API.
//     //var token = result.credential.accessToken;
//     // The signed-in user info.
//     var user = result.user;
    
//     if (user) {
// console.log(user);
// //this.router.navigate('/menu/tabs/home');

//     }
    

//    //  this.navCtrl.navigateRoot('/menu/tabs/home');
//     // ...
//   }
// }).catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
// });
   

  }

  login() {
    if(!this.dataService.isOnline()){
      this.loadingService.dismissLoading();
 this.toastService.presentToast('Network Error,kindly check your internet connection and try again', 'danger');
return false;

    }
    this.loadingService.presentLoading();
    const loginUserObj = this.loginForm.value;
    //this.email=loginUserObj.email;
    if (this.loginForm.valid || 1) {

      let firebaseAuth;
      let firebaseIdToken;
      firebaseAuth = firebase.auth().signInWithEmailAndPassword(loginUserObj.email, loginUserObj.password);
    

      firebaseAuth.then((data: any) => {
        console.log(data);
        firebaseIdToken = firebase.auth().currentUser.getIdToken();
        firebaseIdToken.then(tok => {
          
          this.user.emailLogin(tok).subscribe((users: any) => {
            console.log(users);
            this.loadingService.dismissLoading();
            users.forEach(element => {
              console.log(element);
               console.log(loginUserObj.email);
                console.log(element.email);
              if (element.email === loginUserObj.email) {
                // this.storageService.set('designer', loginUserObj).then((data: any) =>{
                //     console.log(data);
                // }).catch((e) =>{
                //       console.log(e);
                //     })
               // this.storageService.set('designer', loginUserObj).catch((e) =>{
               //        //console.log(e);
               //        console.log(e);
               //        // this.loadingService.dismissLoading();
               //         this.toastService.presentToast('You Device is out of space,Clear space and try again ','danger');
               //      });

                this.loadingService.dismissLoading();
                this.events.publish('user:loggedIn', element);
                this.toastService.presentToastBottom('Welcome, ' + this.titlecasePipe.transform(element.name), 'dark');
               // this.navCtrl.navigateRoot('/menu/tabs/home');
                this.navCtrl.navigateForward('/menu/tabs/tabs/home');
              }
            });
          })
        })
      }).catch(err => {
        console.log(err);
        this.loadingService.dismissLoading();
        this.toastService.presentToast('Invalid email/password combination', 'danger');
      });
    } else {
      this.loadingService.dismissLoading();
      this.toastService.presentToast('Form has one or more errors', 'danger');
    }
  }

  async forgotPass() {
       if(!this.dataService.isOnline()){
 this.toastService.presentToast('Network Error,kindly check your internet connection and try again', 'danger');
return false;

    }
   // console.log(this.email);
    this.email=this.loginForm.value.email;
    const forgot = await this.forgotCtrl.create({
      header: 'Forgot Password?',
      message: 'Enter you email address to reset your password.',
      backdropDismiss: false,
      inputs: [
        {
          name: 'email',
          placeholder: 'Email Address',
          type: 'email',
          value:this.email
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            if (this.isValidMailFormat(data.email)) {
              firebase.auth().sendPasswordResetEmail(data.email).then((res: any) => {
                this.toastService.presentToast('Password reset email sent successfully', 'success');
              }).catch(err => {
                console.log(err);
                if (err.code === 'auth/user-not-found') {
                  this.toastService.presentToast('Email is not registered!', 'danger');
                }
              })
            } else {
              this.toastService.presentToast('Enter correct email address', 'danger');
              forgot.present();
            }

          }
        }
      ]
    });
    forgot.present();
  }


  goToRegister() {
       if(!this.dataService.isOnline()){
         this.loadingService.dismissLoading();
 this.toastService.presentToast('Network Error,kindly check your internet connection and try again', 'danger');
return false;

    }
    this.navCtrl.navigateForward('/register');
  }

  async openPrivacyPolicy() {
    const modal = await this.modalCtrl.create({
      component: PrivacyPolicyPage,
    });
    return await modal.present();
  }

  isValidMailFormat(email) {
    const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    if (email !== '' && (email.length <= 5 || !EMAIL_REGEXP.test(email))) {
      return false;
    }
    return true;
  }

  doSocialLogin(userObj) {
    console.log(userObj);
      if(!this.dataService.isOnline()){
        
         this.loadingService.dismissLoading();
    this.toastService.presentToast('Network Error,kindly check your internet connection and try again', 'danger');
    return false;

    }
   // console.log('start verification');
    // let firebaseIdToken;
    // firebaseIdToken = firebase.auth().currentUser.getIdToken();
    // console.log(firebaseIdToken);

    // firebaseIdToken.then(tok => {
          console.log(userObj.email);

        this.user.byemailLogin(userObj.email).subscribe((data: any) => {

          console.log(data.length);
          if(data.length===0){
            
             console.log("user does not exists,creating user then logging him in");
               this.user.emailRegister(userObj," ").subscribe((data: any) => {
                    console.log(data);
            this.loadingService.dismissLoading();
            this.events.publish('user:created', data);
            this.doSocialLogin(data);
            //this.toastService.presentToast('Welcome, ' + this.titlecasePipe.transform(data.name), 'dark');
            //this.navCtrl.navigateForward('/menu/tabs/tabs/home');
          //  this.navCtrl.navigateForward('/menu/tabs/tabs/home');
                  //this.navCtrl.push('/menu/tabs/tabs/home');

            //this.router.navigate(['/menu/tabs/home']);
          },(e)=>{
            console.log(e);
                       this.loadingService.dismissLoading();
                       this.toastService.presentToast('error try login  again, ','danger');
           

          })

          }
          for (let index = 0; index < data.length; index++) {
            const element = data[index];
            console.log(element.email);
             console.log(element);
             console.log(userObj);
            //console.log('verification');
            if (element.email === userObj.email) {
              console.log("user exists,logging him in");
              console.log(userObj);
             // var;
              // this.storageService.set('designer', element).then((data: any) =>{
              //     console.log("Local storage successfull");
                         this.loadingService.dismissLoading();
              this.events.publish('user:loggedIn', element);
              // for (var i = 0; i < this.coupons.length; i++) {
              //   console.log('dicount discont')
              //   let coupon =this.coupons[i];
              //   this.toastService.presentToast('Discont!Discount,use the following coupon '+coupon.id+' to get' +coupon.percent_off+'% off' , 'dark');
         
              // }
              this.toastService.presentToastBottom('Welcome, ' + this.titlecasePipe.transform(element.name), 'dark');
             // this.navCtrl.navigateForward('/menu/tabs/home');
              this.navCtrl.navigateForward('/menu/tabs/tabs/home');
        
                // }).catch((e) =>{
                  
                //       console.log(e);
                //        this.loadingService.dismissLoading();
                //         this.toastService.presentToast('You Device is out of space,Clear space and try again ','danger');

                     //  this.toastService.presentToast('error try login  again, ','danger');
           
                    // })
          
               // this.storageService.set('designer', loginUserObj).catch((e) =>{
               //        console.log(e);
               //      });
                   //('/menu/tabs/home');
              //this.navCtrl.push('/menu/tabs/tabs/home');
              //this.router.navigate(['/menu/tabs/home']);
              return;
            }
            else{
              console.log("user does not exists,creating user then logging him in");
               this.user.emailRegister(userObj," ").subscribe((data: any) => {
                    console.log(data);
            this.loadingService.dismissLoading();
            this.events.publish('user:created', data);
            this.doSocialLogin(data);
            //this.toastService.presentToast('Welcome, ' + this.titlecasePipe.transform(data.name), 'dark');
            //this.navCtrl.navigateForward('/menu/tabs/tabs/home');
          //  this.navCtrl.navigateForward('/menu/tabs/tabs/home');
                  //this.navCtrl.push('/menu/tabs/tabs/home');

            //this.router.navigate(['/menu/tabs/home']);
          },(e)=>{
            console.log(e);
                       this.loadingService.dismissLoading();
                       this.toastService.presentToast('error try login  again, ','danger');
           

          })
            }
          }
         

        })
     // })
  }

  googleLogin() {
 //       if(!this.dataService.isOnline()){
 //         this.loadingService.dismissLoading();
 // this.toastService.presentToast('Network Error,kindly check your internet connection and try again', 'danger');
 //    return false;

 //    }
    this.loadingService.presentLoading();
    console.log("logging in");
    this.user.googleLogin()
      .catch((error: any) => {
        console.log('catch error: ', error);
        this.loadingService.dismissLoading();
        if (error.code === 'auth/account-exists-with-different-credential') {
          console.log('error from catch: ', error);
          this.toastService.presentToast('Please use prior logged in method', 'danger');
        } else {
          this.toastService.presentToast('Error occured', 'danger');
        }
      })
      .then((user: any) => {
       console.log(user);
        //console.log('user: ', user);

        const userObj: any = {};
        userObj._id = user.user.uid;
        userObj.name = user.user.displayName;
        userObj.email = user.user.email;
        userObj.source = null;
        userObj.type = 'google';
        userObj.card = null;
        userObj.phone = null;

        //console.log(userObj);
        //this.navCtrl.navigateForward('/menu/tabs/tabs/home');
        //this.navCtrl.push('/menu/tabs/tabs/home');
        // this.navCtrl.navigateRoot('/menu/tabs/home');
        //  this.router.navigate(['menu']);
        this.doSocialLogin(userObj);

      })
      .catch((error) => {
        console.log(error);
        this.loadingService.dismissLoading();
      });
  }



}
