import { PrivacyPolicyPage } from './../privacy-policy/privacy-policy';
import { Component, OnInit } from "@angular/core";
import { NavController, AlertController, MenuController, Events } from "ionic-angular";
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from "../register/register";
import firebase from "firebase";

import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { TitleCasePipe } from '@angular/common';
import { ToastProvider } from '../../services/ui-services/toast';
import { LoadingProvider } from '../../services/ui-services/loading';
import { StorageService } from '../../services/core/storage';
import { UserProvider } from '../../services/component-services/user';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;


  isUserLoggedIn = false;
  constructor(
    public nav: NavController,
    public forgotCtrl: AlertController,
    private user: UserProvider,
    public menu: MenuController,
    public toast: ToastProvider,

    public formBuilder: FormBuilder,
    public loading: LoadingProvider,
    public events: Events,
    private titlecasePipe: TitleCasePipe,
    private storage: StorageService) {
    this.menu.swipeEnable(false);
  }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  isValidMailFormat(email) {
    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    if (email != "" && (email.length <= 5 || !EMAIL_REGEXP.test(email))) {
      return false;
    }
    return true;
  }

  register() {
    this.nav.push(RegisterPage);
  }

  login() {
    this.loading.showLoading();
    let loginUserObj = this.loginForm.value;
    if (this.loginForm.valid || 1) {
      firebase.auth().signInWithEmailAndPassword(loginUserObj.email, loginUserObj.password).then((data: any) => {
        console.log(data);
        firebase.auth().currentUser.getIdToken().then(tok => {
          this.user.emailLogin(tok).subscribe((users: any) => {
            console.log(users);
            this.loading.hideLoading();
            users.forEach(element => {
              if (element.email === loginUserObj.email) {
                this.loading.hideLoading();
                this.events.publish('user:loggedIn', element);
                this.toast.newToast('Welcome, ' + this.titlecasePipe.transform(element.name));
                this.nav.setRoot(TabsPage);
              }
            });
          })
        })
      }).catch(err => {
        console.log(err);
        this.loading.hideLoading();
        this.toast.newToast('Invalid email/password combination');
      });


    } else {
      this.loading.hideLoading();
      this.toast.newToast('Form has one or more errors');
    }
  }

  doSocialLogin(userObj) {
    firebase.auth().currentUser.getIdToken().then(tok => {
      this.user.emailLogin(tok).subscribe((data: any) => {
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          if (element.email === userObj.email) {
            this.loading.hideLoading();
            this.events.publish('user:loggedIn', element);
            this.toast.newToast('Welcome, ' + this.titlecasePipe.transform(element.name));
            this.nav.setRoot(TabsPage);
            return;
          }
        }
        this.user.emailRegister(userObj, tok).subscribe((data: any) => {

          this.loading.hideLoading();
          this.events.publish('user:loggedIn', data);
          this.toast.newToast('Welcome, ' + this.titlecasePipe.transform(data.name));
          this.nav.setRoot(TabsPage);
        })

      })
    })
  }

  googleLogin() {
    this.loading.showLoading();
    this.user.googleLogin()
      .catch((error: any) => {
        console.log("catch error: ", error);
        this.loading.hideLoading();
        if (error.code === 'auth/account-exists-with-different-credential') {
          console.log("error from catch: ", error);
          this.toast.newToast("Please use prior logged in method");
        } else {
          this.toast.newToast("Error occured");
        }
      })
      .then((user: firebase.User) => {
        console.log(user)
        console.log("user: ", user);
        let userObj: any = {};
        userObj._id = user.uid
        userObj.name = user.displayName;
        userObj.email = user.email;
        userObj.source = "google";
        userObj.card = null;
        userObj.phone = null;
        this.doSocialLogin(userObj);
      })
      .catch((error) => {
        console.log(error);
        this.loading.hideLoading();
      });
  }

  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to reset your password.",
      enableBackdropDismiss: false,
      inputs: [
        {
          name: 'email',
          placeholder: 'Email Address',
          type: 'email'
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
                this.toast.newToast('Password reset email sent successfully');
              }).catch(err => {
                console.log(err);
                if (err.code === "auth/user-not-found") {
                  this.toast.newToast('Email is not registered!');
                }
              })
            } else {
              this.toast.newToast('Enter correct email address');
              forgot.present();
            }

          }
        }
      ]
    });
    forgot.present();
  }

  openPrivacyPolicy() {
    this.nav.push(PrivacyPolicyPage);
  }

}
