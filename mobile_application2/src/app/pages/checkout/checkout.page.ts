import { Component, OnInit,ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserProvider } from 'src/app/providers/user';
import { ModalController, Events, NavController,NavParams,IonContent } from '@ionic/angular';
import { CardModalPage } from '../card-modal/card-modal.page';
import { UserInfo } from 'firebase';
import { LoadingService } from 'src/app/providers/loading.service';
import { StorageService } from 'src/app/providers/storage.service';
import { PaymentProvider } from 'src/app/providers/payment';
import { OrderProvider } from 'src/app/providers/order';
import { ToastService } from 'src/app/providers/toast.service';
import { AngularCropperjsComponent } from 'angular-cropperjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
 @ViewChild('angularCropper') public angularCropper: AngularCropperjsComponent;
  card: any;
  orderObj: any = {};
  isCardAvaliable: boolean;
  userObj: any;
  Curruser: any;
  activecoupons:any;
  package:any;
  coupon:any;
  disable:boolean=false;
  original_amount:boolean=false;
  iscoupon:boolean=false;
  firstorder:boolean=false;

     @ViewChild(IonContent) content: IonContent;
cropperOptions:any;
croppedImage = null;
pack:any;
croped:any=false;
saved :any=false;
  fileType: string;
  newName = '';
  fileName = '';
  myFile: any;
  showAlert = true;
  imageName: any = '';
  image: any;
  exists : String;
  isimage :boolean;

cropInstance:any;
imgCroppedUrl:any;
  originalFile: any;
  previousFiles: any[] = [];
  buttonClicked: boolean;
   imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50
  };


  constructor(
    private afAuth: AngularFireAuth,
    private user: UserProvider,
    private modalCtrl: ModalController,
    private loading: LoadingService,
    private storage: StorageService,
    private navParams: NavParams,
    private paymentService: PaymentProvider,
    private orderService: OrderProvider,
    private toast: ToastService,
    private events: Events,
    private navCtrl: NavController
  ) { 
// this.storage.get('userData').then((userData: any) => {
//   //console.log(this.userObj);

//       this.userObj=userData[0];

//    },(err)=>{
// console.log(err);
//   });   





//   this.storage.get('PACKAGE').then((myPackage: any) => {
//  this.package=choosenpackage;
//  this.original_amount=choosenpackage.price;

// console.log(this.package);
//   },(err)=>{
//     console.log(err);
    
//   });
 

     this.myFile=this.navParams.data.data.image;
     console.log(this.navParams.data.data.image);
     this.previousFiles=this.navParams.data.data.previous;
     this.fileName=this.navParams.data.data.filename;


  }

  ngOnInit() {
    // if(this.firstorder){
    //   this.applycoupon();
    // }
//    let card = {
//  number: '4242424242424242',
//  expMonth: 12,
//  expYear: 2020,
//  cvc: '220',
//  zip: '99501'
// }
  this.user.getcoupons().subscribe((coupons) =>{
  this.activecoupons=coupons;
  console.table(coupons);
   let coup=coupons;
  let len=Object.keys(coup).length;
  let active_coupons:any =[];
   // if (coupon.length < 0) {
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
       // if(coupon.id!="100OFF"){
           this.iscoupon=true;
        active_coupons.push(coupon);
         // }
        // this.user.applycoupon(curruser.cus_id,coupon.id).subscribe((coupo) =>{

        // });

       }
       
    }
    this.activecoupons=active_coupons;
console.log(this.activecoupons);
  console.log(this.navParams.data.data.package);
  let choosenpackage= this.navParams.data.data.package;
    this.package=choosenpackage;
 this.original_amount=choosenpackage.price;

    this.afAuth.authState.subscribe((user: UserInfo) => {
      console.log(user);
      this.user.getUser(user.uid).subscribe((userData: any) => {
        console.log(userData);
        this.userObj = userData[0];
        // userData[0].card=card;

      // this.storage.set('userData',userData);
        if (userData && userData[0].source) {
          
           this.card = userData[0].source;
           console.log(userData[0].source);
          this.isCardAvaliable = true;
                 this.orderService.getOrdersFromServer(this.userObj._id).subscribe((orders) => {
        let len=Object.keys(orders).length;
        console.log(orders);
        console.log(len);
        if (!len) {
           //alert("first order");
          this.firstorder=true;
          this.coupon="100OFF";
          this.applycoupon();
        }
        else{
          //this.iscoupon=false;
         // alert("Not first order");
        }
      

     });
          // this.storage.set('userData', this.userData[0]).subscribe((userD: any) => {
          //   console.log(userD)

          // });
         // this.userObj=userData;
         
        } else {
          this.isCardAvaliable = false;
                   this.orderService.getOrdersFromServer(this.userObj._id).subscribe((orders) => {
        let len=Object.keys(orders).length;
        console.log(orders);
        console.log(len);
        if (!len) {
          // alert("first order");
          this.firstorder=true;
          this.coupon="100OFF";
          this.applycoupon();
        }
        else{
          //this.iscoupon=false;
          //alert("Not first order");
        }
      

     });
        }
      },(err: any) => {
            this.loading.dismissLoading();
            this.toast.presentToast(err.message, 'danger');
          })
    }, (err: any) => {
            this.loading.dismissLoading();
            this.toast.presentToast(err.message, 'danger');
          });

  },(err)=>{
console.log(err);
  });




  }
  applycoupon(){
    console.log(this.coupon);
    console.log(this.activecoupons);
    
    //this.package.amount=this.coupon;
    let coupons=this.activecoupons;
    let appliedcoupons;
    for (var i = 0; i < coupons.length; i++) {
      //this.toast.presentToast(i, 'dark');

      let coupon=coupons[i];
      console.log(coupon);
      if (!this.firstorder) {
       //this.iscoupon=false;
      if (coupon.id===this.coupon && this.coupon !="100OFF" ) {
       this.iscoupon=true;
        console.log(coupon.id);
        console.log(this.coupon);
        appliedcoupons= this.coupon;
        let amount=this.package.amount;
        console.log(amount);
        console.log(coupon.percent_off);
        let discount =((amount*coupon.percent_off)/100);
         console.log(discount);
         console.log((amount-discount));
        this.package.amount=(amount-discount);
        if(this.package.amount){
          console.log("not zero")
          this.firstorder=false;
        }
        else{
          console.log("is  zero")
          this.firstorder=true;
        }
        this.disable=true;
        this.userObj.coupon=coupon.id;
        this.userObj.discount=discount;
        this.toast.presentToast('coupon applied Successfully', 'dark');


      }
    }else{
         if (coupon.id===this.coupon) {
        console.log(coupon.id);
        console.log(this.coupon);
        appliedcoupons= this.coupon;
        let amount=this.package.amount;
        console.log(amount);
        console.log(coupon.percent_off);
        let discount =((amount*coupon.percent_off)/100);
         console.log(discount);
         console.log((amount-discount));
        this.package.amount=(amount-discount);
        if(this.package.amount){
          console.log("not zero")
          this.firstorder=false;
        }
        else{
          console.log("is  zero")
          this.firstorder=true;
        }
        this.disable=true;
        this.userObj.coupon=coupon.id;
        this.userObj.discount=discount;
        this.toast.presentToast('coupon applied Successfully', 'dark');


      }
    }

      // else{
       
      //    this.toast.presentToast('No such coupon available', 'danger');

      // }

    }
    if(!appliedcoupons){
     // this.iscoupon=true;
    this.toast.presentToast('No such coupon available', 'danger');
    }
  }
   getuser(){
      this.afAuth.authState.subscribe((user: UserInfo) => {
      this.user.getUser(user.uid).subscribe((userData: any) => {
        console.log(userData);
        if (userData && userData[0].source) {
          this.userObj = userData[0];
          this.card = userData[0].source;
          this.isCardAvaliable = true;
        } else {
          this.isCardAvaliable = false;
        }
      })
    })
  }

  async addCreditCard() {
    const cardModal = await this.modalCtrl.create({
      component: CardModalPage
    });
    cardModal.onDidDismiss()
      .then((data: any) => {
         console.log(data);
        if (data) {
          this.card = data.data.source;
         // this.userObj.source= data.data.source;
          console.log(this.card);
          this.isCardAvaliable = true;
        }
      });
    cardModal.present();
  }

  makePayment() {
   // this.getuser();
    this.loading.presentLoading();
  //   this.storage.get('userData').then((userData: any) => {
   console.log(this.userObj);

  //     this.userObj=userData[0];
   // this.storage.get('PACKAGE').then((myPackage: any) => {
      this.orderObj.package = this.package;
      console.log(this.orderObj.package.amount);
       console.log(this.userObj.source);
      //       let userd :any = {};
      this.user.getUser(this.userObj._id).subscribe((userData: any) => {
      console.log(userData);
      this.userObj=userData[0];
      //       userd={
      //         "user":userData,
      //         "amount":this.orderObj.package.amount
      //       };
      // console.log(myPackage);
      // console.log(userd);
   //   this.userObj[0]['amount']=this.orderObj.package.amount;

      
    // this.storage.get('userData').then((dat: any) => {
    //  this.userObj=dat;
    //   });
      this.paymentService.makePayment(this.userObj,this.orderObj.package.amount)
        .subscribe((res) => {
          console.log(res);
         
            console.log(this.userObj);
            console.log(this.navParams.data.data.uploadimage);
            // await this.storage.get('IMAGE').then((image: any) => {
               console.log(this.navParams.data.data.image);
             // this.orderObj.images = this.navParams.data.data.image;
              this.orderObj.images = this.navParams.data.data.uploadimage;
              this.orderObj.date = Date.now();
              this.orderObj.userId = this.userObj._id;
              this.orderService.placeOrder(this.orderObj).subscribe((val) => {
                 console.log(val);
                this.toast.presentToast('Order Placed Successfully!', 'dark');
                this.loading.dismissLoading();
                this.events.publish('order:placed');
               // this.storage.remove('PACKAGE');
                //this.storage.remove('IMAGE');
                this.modalCtrl.dismiss();
                this.navCtrl.navigateRoot('/menu/tabs/tabs/home')
                  .then(() => {
                    this.loading.dismissLoading();
                  });
              })
           // });
       
        }, (err) => {
          this.loading.dismissLoading();
          this.toast.presentToast('Order can  not be accomplished', 'danger')
          this.modalCtrl.dismiss();
          this.navCtrl.navigateRoot('/menu/tabs/tabs/home')
            .then(() => {
              this.loading.dismissLoading();
            });
        });
    });
  //});
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
