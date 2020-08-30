import { Component,ViewChild } from '@angular/core';
import { FCM } from '@ionic-native/fcm/ngx';
//import { FirebaseX } from "@ionic-native/firebase-x/ngx";
//import { Firebase } from '@ionic-native/firebase/ngx';
import { ToastService } from 'src/app/providers/toast.service';
import { Platform,AlertController,IonRouterOutlet,MenuController,NavController  } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserProvider } from 'src/app/providers/user';
//import { FcmService } from 'src/app/providers/fcm.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { OrderProvider } from 'src/app/providers/order';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
   @ViewChild(IonRouterOutlet) routerOutlet: IonRouterOutlet;
  userid:any;
  showSplash = true; // <-- show animation
  constructor(
    private platform: Platform,
    //private firebase: FCM, 
    private fcm: FCM, 
      private router: Router,
      private navCtrl: NavController,
   // private firebase: FirebaseX,
    private orderService: OrderProvider,
    private user:UserProvider,
   // private fcm:firebase,
     private toast:ToastService,
    private afAuth: AngularFireAuth,
    private splashscreen: SplashScreen,
    private fileTransfer: FileTransfer,
    private statusBar: StatusBar,
    private menu: MenuController,
    public alertCtrl: AlertController,
 
  ) {
    //this.user.badgeset(12);
     
     this.afAuth.authState.subscribe((res) => {
      console.log(res);
      if (res!=null) {

      console.log("user id:"+res.uid);
     this.userid=res.uid;
     //this.getToken();
     this.initializeApp();
     this.getToken();
      }
      else{
        //this.navCtrl.navigateRoot('/login');
      }
    },(err)=>{
      console.log(err);
       //this.toast.presentToast('unable to find logged in user','danger');
  
    });
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.splashscreen.hide();
      //  setTimeout(() => {
            this.showSplash = false
       //       }, 5000);
      // timer(3000).subscribe(() => this.showSplash = false); // <-- hide animation after 3s
      // this.user.badgeset(12);
       //this.user.badgeincrement();
        console.log('fileTransfer: ');  
          console.log(JSON.stringify(this.fileTransfer));
   let fileTransfer: FileTransferObject = this.fileTransfer.create();
 console.log('created fileTransfer: ');  
          console.log(JSON.stringify(fileTransfer));
        //
        this.orderService.settfiletransfer(fileTransfer);
        // let dat={
        //       title:"40% OFF DISCOUNT",
        //       body:"get 40% OFF discount on any purchases this month",
        //       wasTapped:true,

        //     };
        //     console.log(dat);
        //      this.user.sendinbox(dat).subscribe((msg)=>{
        //       console.log(msg);

        //      });
       // this.user.sendinbox(data);
      let time=new Date();
      console.log("ï am ready"+time);
      this.getToken();
      this.subscribeToTopic();
        this.fcm.onNotification().subscribe(data => {
          //this.firebase.onMessageReceived().subscribe(data => {
            console.log(data);
          if (data.tap=='background') {
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
              this.user.badgeincrement();

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
               this.user.badgeincrement();

             });
            // this.user.badgeincrement();
             

          };
        });

        this.fcm.onTokenRefresh().subscribe(token => {
            console.log("Token refreshed:"+token);
          // Register your new token in your back-end if you want
          // backend.registerToken(token);
        });
        
     // this.notificationSetup();
      this.statusBar.styleDefault();
      // setTimeout(() => {
      //          this.splashScreen.hide();
      //         }, 5000);
      
    });

      this.platform.backButton.subscribe(async () => {
           // close side menua
            try {
                const element = await this.menu.getOpen();
                if (element) {
                    this.menu.close();
                    return;

                }

            } catch (error) {

            }

      // Catches the active view
      //let nav = this.app.getActiveNavs()[0];
      //let activeView = nav.getActive();                
      // Checks if can go back before show up the alert
   //   if(activeView.name === 'Home') {
         if (this.routerOutlet && this.routerOutlet.canGoBack()) {
      this.routerOutlet.pop();
            //  nav.pop();

          } 
          else {
           let  buttons= [{
                      text: 'Cancel',
                      role: 'cancel',
                      handler: () => {
                        this.navCtrl.navigateRoot('/menu/tabs/home');
                        console.log('** Saída do App Cancelada! **');
                      }
                  },{
                      text: 'Exit App',
                      handler: () => {
                      //  this.logout();
                       // this.platform.exitApp();
                        navigator['app'].exitApp();
                      }
                  }]
            this.newAlert('Close App','Are you sure you want to exit app?',buttons)
              // const alert =  this.alertCtrl.create({
              //     header: 'Close App',
              //     message: 'Are you sure you want to exit app?',
              //     buttons: [{
              //         text: 'Cancel',
              //         role: 'cancel',
              //         handler: () => {
              //           this.routerOutlet.setRoot('Home');
              //           console.log('** Saída do App Cancelada! **');
              //         }
              //     },{
              //         text: 'Exit App',
              //         handler: () => {
              //         //  this.logout();
              //           this.platform.exitApp();
              //           navigator['app'].exitApp();
              //         }
              //     }]
              // });
             // alert.present();
          }
   //   }
  });

  }

  async newAlert(title: string, message: string, buttons: Array<any>) {
    let alert = await this.alertCtrl.create({
      header: title,
      message,
      buttons
    });
    alert.present();
  }

subscribeToTopic() {
    this.fcm.subscribeToTopic('Deals');
     //this.firebase.subscribe('Deals');
    console.log("Success subscribing to topic Deals");
  }
  getToken() {
   console.log("getting token")
     // let  tok={
     //    token: 'fVn53arbRGg:APA91bGZ0ipTiis0YFJxkPGqwNG5BwuhtFLK4eiRq2HSp9Rd7IqDS25WILmbFzENYiqXamMsRBOk3vEd1C-AcrQ3sCDInu3OURAmhaPXxSFDdNeNfhHpjioeVWrCRyqTdMky3eFkSsoH'
     //  }
     //   console.log(tok);
     //   console.log(this.userid);
     //  // Register your new token in your back-end if you want
     //   this.user.registerToken(tok,this.userid).subscribe(user=>{
     //       console.log("Success Registering user token");
     //    console.log(user);
     //   },err=>{
     //     console.log(err);
     //   });
     
    this.fcm.getToken().then(token => {
      // this.firebase.getToken().then(token => {
      console.log("Success receiving token:"+token);
     let  tok={
        token: token
      }
       console.log(tok);
      // Register your new token in your back-end if you want
       this.user.registerToken(tok,this.userid).subscribe(user=>{
         console.log("user update");
        console.log(user);
       },err=>{
         console.log("error update user ");
        console.log(err);
       });
    });
  }
  unsubscribeFromTopic() {
    this.fcm.unsubscribeFromTopic('Deals');
    // this.firebase.unsubscribe('Deals');
  }


}
