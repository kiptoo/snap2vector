import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as firebase from 'firebase/app';
import { NavController, Events, Platform } from '@ionic/angular';
import { DataService } from 'src/app/providers/data.service';
import { ToastService } from 'src/app/providers/toast.service';
import { StorageService } from 'src/app/providers/storage.service';
import { LoadingService } from 'src/app/providers/loading.service';
import { UserProvider } from 'src/app/providers/user';
import { TitleCasePipe } from '@angular/common';
import { Router } from '@angular/router';
//import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;


  googleData = {
    clientId: '942240372918-669v8nknrpkq02np67hkvbgf08q8jhl0.apps.googleusercontent.com',
    clientSecret: 'wsnVP_S43h7ZoTYVIyXdoDuH'
  }

  constructor(
    private formBuilder: FormBuilder,
    private data: DataService,
       private router: Router ,
    private toastService: ToastService,
    private storageService: StorageService,
    private navCtrl: NavController,
    private loadingService: LoadingService,
    private user: UserProvider,
    private titlecasePipe: TitleCasePipe,
    private events: Events,
    //private fAuth: FirebaseAuthentication,
    private platform: Platform
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')])],
      company: ['', Validators.required],
      email: ['', Validators
        .compose([Validators.required, Validators.pattern('^[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}')])],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  isValidMailFormat(email) {
    const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    if (email !== '' && (email.length <= 5 || !EMAIL_REGEXP.test(email))) {
      return false;
    }
    return true;
  }

  register() {
    this.loadingService.presentLoading();
    const registerUserObj: any = {
      name: this.registerForm.value.name,
      phone: this.registerForm.value.phone,
      company: this.registerForm.value.company,
      email: this.registerForm.value.email,
    };
    if (this.registerForm.valid || 1) {
      let firebaseAuth;
      let firebaseIdToken;
      if (!this.platform.is('cordova')) {
        firebaseAuth = firebase.auth().createUserWithEmailAndPassword(registerUserObj.email, this.registerForm.value.password);
        firebaseIdToken = firebase.auth().currentUser.getIdToken();
      } else {
        firebaseAuth = firebase.auth().createUserWithEmailAndPassword(registerUserObj.email, this.registerForm.value.password);
        firebaseIdToken = firebase.auth().currentUser.getIdToken();
      }
      firebaseAuth.then((data: any) => {
        console.log(data);
        firebaseIdToken.then(tok => {
          registerUserObj._id = firebase.auth().currentUser.uid;
          this.user.emailRegister(registerUserObj, tok)
            .subscribe((data: any) => {
              this.loadingService.dismissLoading();
              this.toastService.presentToast('Sign-up Success', 'success ');

              this.navCtrl.navigateBack('login');

            });
        });
      }).catch(err => {
        console.log(err);
        let message = '';
        if (err.code === 'auth/email-already-in-use') {
          message = err.message;
        }
        this.loadingService.dismissLoading();
        this.toastService.presentToast(message, 'danger');
      });



    } else {
      this.loadingService.dismissLoading();
      this.toastService.presentToast('Form has one or more errors', 'danger');

    }
  }

  // login() {
  //   this.router.navigate(['/login']);
  // }

 doSocialLogin(userObj) {

   // console.log('start verification');
    let firebaseIdToken;
    firebaseIdToken = firebase.auth().currentUser.getIdToken();
   // console.log(firebaseIdToken);

    firebaseIdToken.then(tok => {
     //   console.log(tok);

        this.user.emailLogin(tok).subscribe((data: any) => {

          console.log(data);
          for (let index = 0; index < data.length; index++) {
            const element = data[index];
            //console.log('verification');
            if (element.email === userObj.email) {
              //console.log('verified');
              this.storageService.set('designer', element).then((data: any) =>{
                  //  console.log(data);
                }).catch((e) =>{
                      console.log(e);
                    })
               // this.storageService.set('designer', loginUserObj).catch((e) =>{
               //        console.log(e);
               //      });
              this.loadingService.dismissLoading();
              this.events.publish('user:loggedIn', element);
              this.toastService.presentToast('Welcome, ' + this.titlecasePipe.transform(element.name), 'dark');
             // this.navCtrl.navigateForward('/menu/tabs/home');
              this.navCtrl.navigateForward('/menu/tabs/tabs/home');
              //('/menu/tabs/home');
              //this.navCtrl.push('/menu/tabs/tabs/home');
              //this.router.navigate(['/menu/tabs/home']);
              return;
            }
            else{
               this.user.emailRegister(userObj, tok).subscribe((data: any) => {

            this.loadingService.dismissLoading();
            this.events.publish('user:loggedIn', data);
            this.toastService.presentToast('Welcome, ' + this.titlecasePipe.transform(data.name), 'dark');
            //this.navCtrl.navigateForward('/menu/tabs/tabs/home');
            this.navCtrl.navigateForward('/menu/tabs/tabs/home');
                  //this.navCtrl.push('/menu/tabs/tabs/home');

            //this.router.navigate(['/menu/tabs/home']);
          })
            }
          }
         

        })
      })
  }

login(){
  this.router.navigate(['/login']);
}
 googleLogin() {
    this.loadingService.presentLoading();
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
      // console.log(user);
        //console.log('user: ', user);

        const userObj: any = {};
        userObj._id = user.user.uid;
        userObj.name = user.user.displayName;
        userObj.email = user.user.email;
        userObj.source = 'google';
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
  // googleLogin() {
  //   this.loadingService.presentLoading();
  //   const that = this;
  //   const provider = new firebase.auth.GoogleAuthProvider();

  //   let firebaseAuth;
  //   let firebaseIdToken;
  //   if (!this.platform.is('cordova')) {
  //     firebaseAuth = firebase.auth().signInWithRedirect(provider)
  //     firebaseIdToken = firebase.auth().getRedirectResult();
  //   } else {
  //     firebaseAuth = this.fAuth.signInWithGoogle(this.googleData.clientId, this.googleData.clientSecret)
  //   }
  //   firebaseAuth.auth().signInWithRedirect(provider)
  //     .then((result) => {
  //         return firebase.auth().getRedirectResult();

  //     })
  //     .then((result: any) => {

  //       const user = result.user;
  //       const userObj: any = {};
  //       userObj._id = firebase.auth().currentUser.uid;
  //       userObj.name = user.displayName;
  //       userObj.email = user.email;
  //       userObj.source = 'google';
  //       userObj.card = null;
  //       userObj.phone = null;
  //       that.doSocialLogin(userObj);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       that.loadingService.dismissLoading();
  //     });
  // }

}
