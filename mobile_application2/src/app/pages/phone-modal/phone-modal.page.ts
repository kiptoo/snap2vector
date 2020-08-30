import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/providers/loading.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserProvider } from 'src/app/providers/user';
import { ToastService } from 'src/app/providers/toast.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-phone-modal',
  templateUrl: './phone-modal.page.html',
  styleUrls: ['./phone-modal.page.scss'],
})
export class PhoneModalPage implements OnInit {

  userObj: any = {};
  status: boolean;
  phone = '';
  userData : any;


  constructor(
    private loading: LoadingService,
    private afAuth: AngularFireAuth,
    private user: UserProvider,
    private toast: ToastService,
    private modalCtrl: ModalController
  ) {

 this.afAuth.authState.subscribe((res) => {
       this.user.getUser(res.uid).subscribe((data) =>{
            this.userData = data[0];
      });
    })
   }

  ngOnInit() {
  }

  updatePhoneNo() {
    console.log(this.phone);
    if (this.phone !== '' && this.isValidMobile(this.phone)) {
      this.loading.presentLoading();

      this.afAuth.authState.subscribe((user: any) => {
  //console.log(user.phone);
       // user.phone = this.phone;
        let dat={
          phone:this.phone
        }
        console.log(dat);

        this.user.addPhoneDetails(dat,user.uid)
          .subscribe((data: any) => {
            this.toast.presentToast('Phone No Updated Successfully!', 'dark');

            setTimeout(() => {
              this.loading.dismissLoading();
              this.dismiss();
            }, 1000)
          });
      });
    } else {
      this.toast.presentToast('Form has one or more errors', 'danger');

    }
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }

  phonelimit(event) {
     console.log(event);
    console.log(this.phone);
    if (event.target.value.length > 10) {
      event.target.value = event.target.value.substr(0, 10);
      this.phone = event.target.value;
      console.log(this.phone);
    }
  }
  isValidMobile(phone): any {

    let regExp = /[0-9]{10}$/;
   // let regExp =  /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

    if (regExp.test(phone)) {
       // return {"invalidMobile": true};
       return true
    }
    else{
       return false;
    }
   
}

}
