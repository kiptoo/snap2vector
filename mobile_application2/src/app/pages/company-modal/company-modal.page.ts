import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/providers/loading.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserProvider } from 'src/app/providers/user';
import { ToastService } from 'src/app/providers/toast.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-company-modal',
  templateUrl: './company-modal.page.html',
  styleUrls: ['./company-modal.page.scss'],
})
export class CompanyModalPage implements OnInit {

  company = '';
  userObj: any = {};
   userData : any;

  constructor(
    private loading: LoadingService,
    private afAuth: AngularFireAuth,
    private user: UserProvider,
    private toastService: ToastService,
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

  updateCompanyName() {
    console.log(this.company);
    if (this.company !== '') {
      this.loading.presentLoading();

      this.afAuth.authState.subscribe((user: any) => {

        this.userObj = user;
        user.company = this.company;
        console.log(user);
          let dat={
          company:this.company
        }
          // let  cardSource = {
          //    user
          // }

        this.user.addCompanyDetails(dat,user.uid).subscribe((data: any) => {
          setTimeout(() => {
            this.toastService.presentToast('Company Name Updated Successfully!', 'dark');
            this.loading.dismissLoading();
            this.dismiss();
          }, 1000)
        });
      });
    } else {
      this.toastService.presentToast('Form has one or more errors', 'danger');
    }
  }
  dismiss() {
    this.modalCtrl.dismiss();
  }

}
