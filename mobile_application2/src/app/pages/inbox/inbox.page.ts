import { Component, OnInit,AfterViewInit } from '@angular/core';
import { NavController, IonContent, ModalController } from '@ionic/angular';
import { UserProvider } from 'src/app/providers/user';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit,AfterViewInit {
  notifications:any;
  constructor(
private navCtrl:NavController,
  private afAuth: AngularFireAuth,
 private user:UserProvider
   ) {
   	 	  
 

   }
ionViewWillEnter() {
	   this.afAuth.authState.subscribe((res) => {
      console.log(res);
      if (res!=null) {
      console.log("user id:"+res.uid);
   //  this.userid=res.uid;
         this.user.getinbox(res.uid).subscribe((msg)=>{
    	console.log(msg);
    	let data=msg[0];
    	console.log(data.body);
    this.notifications=msg;
    });
      }
      else{
        //this.navCtrl.navigateRoot('/login');
      }
    },(err)=>{
      console.log(err);
       //this.toast.presentToast('unable to find logged in user','danger');
  
    }); 

}
  ngOnInit() {

  }
  ngAfterViewInit(){
  
  }
    goBack() {
    	this.notifications=[];
    this.navCtrl.navigateBack('/menu/tabs/tabs/home');
  }


}
