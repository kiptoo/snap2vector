import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as firebase from 'firebase/app';
import { DataService } from 'src/app/providers/data.service';
import { ToastService } from 'src/app/providers/toast.service';
import { StorageService } from 'src/app/providers/storage.service';
import { NavController } from '@ionic/angular';
import { LoadingService } from 'src/app/providers/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private data: DataService,
    private toastService: ToastService,
    private storageService: StorageService,
    private navCtrl: NavController,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    let matched = false;
    this.loadingService.presentLoading();
    if (this.loginFormGroup.valid) {

      const designerObj = this.loginFormGroup.value;
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {

        firebase.auth().signInWithEmailAndPassword(designerObj.email, designerObj.password)
          .then((data: any) => {
            firebase.auth().currentUser.getIdToken().then(tok => {
              this.data.login(tok).subscribe(data1 => {
                const designers = data1;
                designers.forEach(designer => {
                  if (designer.email === designerObj.email) {
                    this.storageService.set('designer', designerObj).catch((e) =>{
                      console.log(e);
                    })
                    matched = true;
                    this.navCtrl.navigateForward('/menu/dashboard');
                    this.loadingService.dismissLoading();
                  }
                });
                if (!matched) {
                  this.toastService.presentToast('No user found. Please register first.', 'danger');
                  this.loadingService.dismissLoading();
                }
              }, err => {
              });
            })
          }).catch(err => {
            console.log(err);
            if (err.code === 'auth/user-not-found') {
              this.toastService.presentToast('No user found. Please register first.', 'danger');
              this.loadingService.dismissLoading();
            } else if (err.code === 'auth/wrong-password') {
              this.toastService.presentToast('Invalid email/password combination.', 'danger');
              this.loadingService.dismissLoading();
            }
          });
      }).catch(err => {
        console.log(err);
        this.loadingService.dismissLoading();
      });
    } else {
      this.toastService.presentToast('Form has one or more errors', 'danger');
      this.loadingService.dismissLoading();
    }

  }


  goToRegister() {
    this.navCtrl.navigateForward('/register');
  }

}
