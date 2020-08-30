import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { NavController } from '@ionic/angular';
import { StorageService } from 'src/app/providers/storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  selectedPath = '';

  pages = [
    {
      title: 'Dashboard',
      url: '/menu/dashboard'
    },
  ];

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private storageService: StorageService
  ) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {

  }

  logOut() {
    this.storageService.remove('designer');
    this.navCtrl.navigateRoot('/login');
  }

}