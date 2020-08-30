import { Component, OnInit } from "@angular/core";
import firebase from "firebase";
import { NavController, AlertController, MenuController, Events } from "ionic-angular";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { LoginPage } from "../login/login";
import { TabsPage } from '../tabs/tabs';
import { TitleCasePipe } from "@angular/common";
import { ToastProvider } from "../../services/ui-services/toast";
import { LoadingProvider } from "../../services/ui-services/loading";
import { StorageService } from "../../services/core/storage";
import { UserProvider } from "../../services/component-services/user";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  isUserLoggedIn: boolean;
  userInfo;

  constructor(
    public nav: NavController,
    public alert: AlertController,
    public menu: MenuController,
    public toast: ToastProvider,
    private formBuilder: FormBuilder,
    public loading: LoadingProvider,
    public events: Events,
    private titlecasePipe: TitleCasePipe,
    private storage: StorageService,
    private user: UserProvider
  ) {

    this.menu.swipeEnable(false);
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')])],
      company: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}')])],
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
    this.loading.showLoading();
    let registerUserObj: any = {
      "name": this.registerForm.value.name,
      "phone": this.registerForm.value.phone,
      "company": this.registerForm.value.company,
      "email": this.registerForm.value.email,
    };
    if (this.registerForm.valid || 1) {

      firebase.auth().createUserWithEmailAndPassword(registerUserObj.email, this.registerForm.value.password).then((data: any) => {
        console.log(data);
        firebase.auth().currentUser.getIdToken().then(tok => {
          registerUserObj._id = firebase.auth().currentUser.uid;
          this.user.emailRegister(registerUserObj, tok)
            .subscribe((data: any) => {
              this.loading.hideLoading();
              this.toast.newToast('Sign-up Success');

              this.nav.setRoot(LoginPage);

            });
        })
      }).catch(err => {
        console.log(err);
        let message = "";
        if (err.code === "auth/email-already-in-use") {
          message = err.message;
        }
        this.loading.hideLoading();
        this.toast.newToast(message);
      })



    } else {
      this.loading.hideLoading();
      this.toast.newToast('Form has one or more errors');

    }
  }

  login() {
    this.nav.push(LoginPage);
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
        this.user.emailRegister(userObj, tok)
          .subscribe((data: any) => {
            this.loading.hideLoading();
            this.events.publish('user:loggedIn', data);
            this.toast.newToast('Welcome, ' + this.titlecasePipe.transform(data.name));

            this.nav.setRoot(TabsPage);

          });

      })
    })
  }

  googleLogin() {
    this.loading.showLoading();
    let that = this;
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider)
      .then(function () {
        return firebase.auth().getRedirectResult();
      })
      .then(function (result) {

        let user = result.user;
        let userObj: any = {};
        userObj._id = firebase.auth().currentUser.uid;
        userObj.name = user.displayName;
        userObj.email = user.email;
        userObj.source = "google";
        userObj.card = null;
        userObj.phone = null;
        that.doSocialLogin(userObj);
      })
      .catch(function (error) {
        console.log(error);
        that.loading.hideLoading();
      });
  }
}
