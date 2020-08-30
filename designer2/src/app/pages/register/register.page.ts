import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import * as firebase from 'firebase/app';
import { DataService } from 'src/app/providers/data.service';
import { ToastService } from 'src/app/providers/toast.service';
import { StorageService } from 'src/app/providers/storage.service';
import { NavController } from '@ionic/angular';
import { LoadingService } from 'src/app/providers/loading.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private data: DataService,
    private toastService: ToastService,
    private storageService: StorageService,
    private navCtrl: NavController,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.registerFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required, , Validators.minLength(6)],
      confirmPassword: ['', Validators.required, , Validators.minLength(6)]
    }, { validator: this.passwordConfirming });
  }

  register() {
    this.loadingService.presentLoading();
    if (this.registerFormGroup.valid) {
      const designerObj = {
        name: this.registerFormGroup.controls.name.value,
        email: this.registerFormGroup.controls.email.value,
      }
      firebase.auth().createUserWithEmailAndPassword(designerObj.email, this.registerFormGroup.controls.password.value)
        .then((data: any) => {
          firebase.auth().currentUser.getIdToken().then(tok => {
            this.data.register(designerObj, tok).subscribe(data1 => {
              this.loadingService.dismissLoading();
              this.toastService.presentToast('Registration successful', 'success');
              this.navCtrl.navigateBack('/login');
            }, err => {
              this.toastService.presentToast('Registration failed, try again', 'danger');
              this.loadingService.dismissLoading();
            });
          })
        }).catch(err => {
          console.log(err);
          if (err.code === 'auth/email-already-in-use') {
            this.loadingService.dismissLoading();
            this.toastService.presentToast('Email is already registered!', 'danger');
          }
        });
    } else {
      this.toastService.presentToast('Form has one or more errors', 'danger');
      this.loadingService.dismissLoading();
    }
  }

  goToSignIn() {
    this.navCtrl.navigateBack('/login');
  }

  // Checks password
  passwordConfirming(c: AbstractControl): { invalid: boolean } {

    if (c.get('password').value !== c.get('confirmPassword').value) {
      return { invalid: true };
    }

  }

}
