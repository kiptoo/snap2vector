
import { Component, OnInit,NgZone } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
@Component({
  selector: 'page-home',
  template: ''
})

export class LogoutComponent implements OnInit{
  
  constructor(public router: Router,
  public zone:NgZone) {}
  
  ngOnInit() {
    firebase.auth().signOut();
    localStorage.removeItem('designer-session');
    this.zone.run(()=>{
          this.router.navigate(['/login']);
        })

  }
}
