import { Component, OnInit,AfterViewInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { MenuController ,NavController, ModalController} from '@ionic/angular';
import { StorageService } from 'src/app/providers/storage.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { PhoneModalPage } from '../phone-modal/phone-modal.page';
import { CardModalPage } from '../card-modal/card-modal.page';
import { CompanyModalPage } from '../company-modal/company-modal.page';
import { UserProvider } from 'src/app/providers/user';
import introJs from 'intro.js/intro.js';
import { DataService } from 'src/app/providers/data.service';
import { ToastService } from 'src/app/providers/toast.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit,AfterViewInit {
  selectedPath = '';
  userData: any;
  pages = [
    {
      title: 'Home',
      icon: 'home',
      id:'home',
      url: '/menu/tabs',
      description:'Click go back to home page'
    }
  ];
  // pages = [
  //   {
  //     title: 'Home',
  //     icon: 'home',
  //     id:'home',
  //     url: '/menu/tabs',
  //     description:'Click go back to home page'
  //   },
  //     {
  //     title: 'Inbox',
  //     icon: 'notifications',
  //     id:'inbox',
  //     url: '/menu/tabs',
  //     description:'Click go back to Inbox'
  //   }
  // ];

  modals = [
    {
      title: 'Add Phone',
      icon: 'phone-portrait',
      id:'phone',
      component: PhoneModalPage,
      description:'Click here to add phone contact'
    },
    {
      title: 'Add Card',
      icon: 'card',
      id:'card',
      component: CardModalPage,
      description:'Click here to add a card you shall use for payments'
    },
    {
      title: 'Add Company Name',
      icon: 'briefcase',
      id:'company',
      component: CompanyModalPage,
       description:'Click here to add a card you shall use for payments'
    },
  ]

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private storageService: StorageService,
    private afAuth: AngularFireAuth,
     //private navParams: NavParams,
     private user: UserProvider,
     private menu: MenuController,
     private dataService:DataService,
    private modalCtrl: ModalController,
    private toast:ToastService
  ) {

   

    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });

    this.afAuth.authState.subscribe((res) => {
      console.log(res);
      if (res!=null) {
      console.log("user id:"+res.uid);
      this.user.getUser(res.uid).subscribe((data) =>{
        //console.log(data);
            this.userData = data[0];
      });
      }
      else{
        this.navCtrl.navigateRoot('/login');
      }
    },(err)=>{
      console.log(err);
       this.toast.presentToast('unable to find logged in user','danger');
  
    })
  }

  ngOnInit() {

  }
  ngAfterViewInit(){
 //this.intro();
  }
  intro() {
    console.log(this.modals);
    console.log(this.pages)
   // this.menu.enable(true,'first');
    this.menu.enable(true, 'first');
    this.menu.open('first');
  let intro = introJs.introJs();
  let introsteps:any=[];
 introsteps.push({intro: "Hello ,welcome to snapvector!"});
 let lens=Object.keys(this.pages).length;
  for (var i = 0; i < lens; i++) {
    let modal=this.pages[i];
    introsteps.push({
      element: '#'+modal.id,
      intro: modal.description,
      position: 'bottom'
    });
  }

// let len=Object.keys(this.modals).length();
  let len=Object.keys(this.modals).length;
  for (var i = 0; i < len; i++) {
    let modal=this.modals[i];
    introsteps.push({
      element: '#'+modal.id,
      intro: modal.description,
      position: 'bottom'
    });
  }

  introsteps.push({
      element: '#logout',
      intro:'click here to log out',
      position: 'bottom'
      });
   
  console.log(introsteps);
  intro.setOptions({
  steps: introsteps
  // [
  //   {
  //     intro: "Hello ,welcome to snapvector!"
  //   },
  //   {
  //     element: '#step1',
  //     intro: "This is a tooltip.",
  //     position: 'bottom'

  //   },
  //   {
  //     element: '#step2',
  //     intro: "Ok, wasn't that fun?",
  //     position: 'bottom'
  //   }
  // ]
  });
  intro.start();
}

  logOut() {
    // this.storageService.remove('designer');
    // this.storageService.remove('packs');
    // this.storageService.remove('coupons');
     this.afAuth.auth.signOut();
    this.navCtrl.navigateRoot('/login');
  }


  async openModal(component: any) {

    if(this.dataService.isOnline()){
    const modal = await this.modalCtrl.create({
      component: component,
    });
        modal.onDidDismiss()
      .then((data: any) => {
         console.log(data);
        if (data) {
             this.user.getUser(this.userData._id).subscribe((data) =>{
        //console.log(data);
            this.userData = data[0];
      });
        }
      });
    return await modal.present();


  }

else{
      this.toast.presentToast('Network Error,kindly check your internet connection and try again', 'danger');

}

}


}