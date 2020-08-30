
import { Component, OnInit ,NgZone} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

declare var $: any;

@Component({
  selector: 'page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  title = 'designer-panel';

  loginForm: FormGroup;
  registerForm: FormGroup;
  loginPressed = false;
  registerPressed = false;

  constructor(public formBuilder: FormBuilder, public commonService: CommonService, public router: Router,
  public zone:NgZone) {
    console.log("constructor login");
  }


  ngOnInit() {
    console.log("ngOninit login");
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    $(function() {

      $('#login-form-link').click(function(e) {
      $('#login-form').delay(100).fadeIn(100);
       $('#register-form').fadeOut(100);
      $('#register-form-link').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
      });
      $('#register-form-link').click(function(e) {
      $('#register-form').delay(100).fadeIn(100);
       $('#login-form').fadeOut(100);
      $('#login-form-link').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
      });
    });
  }

  login() {
    let matched = false;
    if (this.loginForm.valid) {
      this.loginPressed = true;
      let designerObj = this.loginForm.value;
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
        firebase.auth().signInWithEmailAndPassword(designerObj.email, designerObj.password).then((data: any) => {
          firebase.auth().currentUser.getIdToken().then(tok=>{
            this.commonService.login(tok).subscribe(data1 => {
              let designers = JSON.parse(data1._body);
              designers.forEach(designer => {
                if (designer.email === designerObj.email) {
                  localStorage.setItem('designer-session', JSON.stringify(designerObj));
                  matched = true;
                  this.zone.run(()=>{
                    this.router.navigate(['/index']);
                  })
                }
              });
              if (!matched) {
                alert('No user found. Please register first.');
              }
            }, err => {
            });
          })
          this.loginPressed = false;
        }).catch(err => {
          console.log(err);
          if (err.code === 'auth/user-not-found') {
            alert('No user found. Please register first.');
          } else if (err.code === 'auth/wrong-password') {
            alert('Invalid email/password combination');
          }
          this.loginPressed = false;
        });
      }).catch(err => {
        console.log(err);
      });
    } else {
      alert('Form has one or more errors');
    }

  }

  register() {
    if (this.registerForm.valid) {
      this.registerPressed = true;
      let designerObj = this.registerForm.value;
      firebase.auth().createUserWithEmailAndPassword(designerObj.email, designerObj.password).then((data: any) => {
        firebase.auth().currentUser.getIdToken().then(tok=>{
          designerObj.password = null;
          this.commonService.register(designerObj,tok).subscribe(data1 => {
            $('#login-form-link').click();
          }, err => {
            alert('Registration failed, try again');
          });
        })
        this.registerPressed = false;
      }).catch(err => {
        console.log(err);
        if (err.code === 'auth/email-already-in-use'){
          alert('Email is already registered!');
        }
        this.registerPressed = false;
      });
      
    } else {
      alert('Form has one or more errors');
    }
  }
}
