import { Component, OnInit } from '@angular/core';
import { SMS } from '@ionic-native/sms/ngx';
import { NavController, Platform } from '@ionic/angular';
import { DataService } from 'src/app/providers/data.service';
import { ToastService } from 'src/app/providers/toast.service';
import { StorageService } from 'src/app/providers/storage.service';
import { UserProvider } from 'src/app/providers/user';
import { LoadingService } from 'src/app/providers/loading.service';
import { FCM } from '@ionic-native/fcm/ngx';
import {Observable} from "rxjs/Observable";
//import { FCM } from '@ionic-native/fcm/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
//import { FCM } from '@ionic-native/fcm/ngx';

//import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  public thebudge: any;
    data:any;
    userid:any;
     badge: Observable<number>;
    coupons:any;

    iscoupon:boolean=false;

  constructor(
    public sms: SMS,
    private fcm: FCM, 
    //public plt: Platform
    private navCtrl: NavController,
    private platform: Platform,

    private dataService:DataService,
     private user:UserProvider,
     private afAuth: AngularFireAuth,
    private toast:ToastService,
        //private navParams: NavParams,
    private  storageService : StorageService,
    private loadingService: LoadingService,
  ) {

 

    this.loadingService.presentLoading();
     this.badgeset(0);
    this.badge=this.user.listnumber;
    // this.user.badgeset(2);
     this.user.listnumber.subscribe(num=>{
   console.log(num);
   //this.badge=num;
     });
    //console.log(this.user.budgenumber);
    //this.loadingService.presentLoading();

      this.afAuth.authState.subscribe((res) => {
      console.log(res);
      if (res!=null) {
      console.log("user id:"+res.uid);
     this.userid=res.uid;
      }
      else{
        //this.navCtrl.navigateRoot('/login');
      }
    },(err)=>{
      console.log(err);
       //this.toast.presentToast('unable to find logged in user','danger');
  
    });

   //this.storageService.get('designer').then((curruser)=>{
        this.user.getcoupons().subscribe((coupons) =>{

      console.log(coupons); 
      let coup=coupons;
      console.log(coup); 
      // console.log(coup.isEmpty()); 
     // this.iscoupon=coup.isEmpty();
      let active_coupons:any =[];
      let len=Object.keys(coup).length;
      console.log(len); 
      // if (len > 0) {
      //    this.iscoupon=true;
      // }
    for (var i = 0; i < len; i++) {
      let coupon=coup[i];
     //  let today=new Date();
     //  console.log(today); 
     // console.log(coupon);
     //  console.log('redeam bÿ:'+new Date(coupon.redeem_by));
     //   console.log('created on:'+ new Date(coupon.created));
     //   console.log('duration in months:'+coupon.duration_in_months);
       if(coupon.valid){
         console.log('valid');
         console.log(new Date(coupon.created));
         if(coupon.id!="100OFF"){
           this.iscoupon=true;
        active_coupons.push(coupon);
         }
        // this.user.applycoupon(curruser.cus_id,coupon.id).subscribe((coupo) =>{

        // });

       }
       
    }
    this.coupons=active_coupons;
    // this.storageService.set('coupons', this.coupons).catch((e) =>{
    //                   //console.log(e);
    //                   console.log(e);
    //                   // this.loadingService.dismissLoading();
    //      this.toast.presentToast('You Device is out of space,Clear space and try again ','danger');
    //                 });
    console.log(this.coupons);


    });
        // }).catch((e) =>{
        //   console.log(e);

        // });



        this.dataService.getRequest("packages").subscribe((packages)=>{
      console.log(packages);
      this.data=packages;
      this.loadingService.dismissLoading();

         //  this.storageService.set('packs', packages).catch((e) =>{
         //              //console.log(e);
         //              console.log(e);
         //              // this.loadingService.dismissLoading();
         // this.toast.presentToast('This app uses device Memory,You Device is out of space,Clear space and try again ','danger');
                   
         //            });
     // let len=Object.keys(packages).length;
     //  for (var i = 0; i < len; i++) {
     //    let thispackage=packages[i]
  
     //  }

});


    //   this.start =Math.max.apply(Math, array.map(function(o) { return o.y; }))


         this.fcm.onNotification().subscribe(data => {
          //console.log("received message");
          //console.log(data);
          if (data.wasTapped) {
            console.log("Received in background");
            console.log(data);
             console.log(data.title);
            let dat={
              user:this.userid,
              title:data.title,
              body:data.body,
              wasTapped:data.wasTapped,

            };
            console.log(dat);
                this.user.sendinbox(dat).subscribe((msg)=>{
              console.log(msg);
              this.badgeincrement();

             });
               //  this.user.badgeincrement();
              
            }
         

           else {
            console.log("Received in foreground");
            console.log(data);
             console.log(data.title);
            let dat={
               user:this.userid,
              title:data.title,
              body:data.body,
              wasTapped:data.wasTapped,

            };
            console.log(dat);
                 this.user.sendinbox(dat).subscribe((msg)=>{
              console.log(msg);
               this.badgeincrement();

             });
            // this.user.badgeincrement();
             

          };
        });


  }
   badgeset(num){
  console.log("setting budge number");

  let x= parseInt(num, 10);
   console.log(x);
 // this.badge.set(x);
//let budges= await this.badge.get();
this.thebudge=num;
let budges= this.thebudge;
console.log(budges);
let no=parseInt(budges, 10);
console.log(no);
//this.budgenumber.next(no);//next method updates the stream value
}
 badgeincrement(){
 console.log("setting budge increment");
  //let x= parseInt(num, 10);
 //  console.log(x);
  //this.badge.set(x);
//let budges= await  this.badge.increase(1);
let bj=parseInt(this.thebudge, 10);
console.log(bj);
let budges =(bj+1);
this.thebudge=budges;
console.log(budges);
//let no=parseInt(budges, 10);
 //this.budgenumber.next(budges);//next method updates the stream value
}
 badgeclear(){
  //this.badge.clear();
 //let budges= await this.badge.get();
 this.thebudge=0;
let budges= this.thebudge;
console.log(budges);
let no=parseInt(budges, 10)
//this.budgenumber.next(no);//next method updates the stream value
}
    openinbox() {
    this.navCtrl.navigateForward('/inbox');
   this.badgeset(0);
   // this.user.badgeincrement();
    //console.log(this.user.budgenumber);
    // this.badge=this.user.budgenumber;
    //this.user.budgenumber
  }
from(dat){
  let normal:any=[];
  for (var x = 0; x < dat.length; x++) {
              let sel= dat[x];
           // console.log(sel);
            if(sel.type==="normal"){
                normal.push(sel);
            }
     }

  return Math.min.apply(Math, normal.map(function(o) { return o.value; }))

}
  vector(e) {
    console.log(e);


if(this.dataService.isOnline()){
  if (e==='vector') {
    this.navCtrl.navigateForward('/menu/tabs/tabs/vector-package');
  }else{
    this.navCtrl.navigateForward('/menu/tabs/tabs/digitize-package');

  }
    
  }
  else{

  this.toast.presentToast('Network Error,kindly check your internet connection and try again', 'danger');

  }
  }

  digitize() {
    if(this.dataService.isOnline()){

    this.navCtrl.navigateForward('/menu/tabs/tabs/digitize-package');
  }
  else{
      this.toast.presentToast('Network Error,kindly check your internet connection and try again', 'danger');

  }
  }

  message() {
    const options = {
      replaceLineBreaks: false, // true to replace \n by a new line, false by default
      android: {
        intent: 'INTENT'  // send SMS with the native android SMS messaging
        //intent: '' // send SMS without open any other app
      }
    };
    this.sms.send('15187791415', '', options);
  }

  get isCordova() {
    return this.platform.is('cordova');
  }
}
