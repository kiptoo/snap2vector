import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController, IonContent, ModalController } from '@ionic/angular';
import { StorageService } from 'src/app/providers/storage.service';
import { ToastService } from 'src/app/providers/toast.service';
import { ImageSelectionPage } from '../image-selection/image-selection.page';
import { DataService } from 'src/app/providers/data.service';
import { LoadingService } from 'src/app/providers/loading.service';

@Component({
  selector: 'app-vector-package',
  templateUrl: './vector-package.page.html',
  styleUrls: ['./vector-package.page.scss'],
})
export class VectorPackagePage implements OnInit {

  @ViewChild(IonContent) content: IonContent;
 //prices: any = [{ value: 15, name: '$15 - Basic Logo' }, { value: 20, name: '$20 - Detail Logo' }, { value: 35, name: '$35 - Complex Logo' },{ value: 45, name: '$45 - Very Complex Logo' }];
  prices: any;
  rush: any=0;
  vectorObj = {
    type: 'Snap to Vector',
    price: '',
    scheme: '',
    artwork: '',
    isUrgent: false,
    fileFormat: '',
    instructions: '',
    amount: 0
  }
  isRushdisabled = false;
  fileListOpen = false;
  isError = false;
  

  constructor(
    private navCtrl: NavController,
    private elementRef: ElementRef,
    private storage: StorageService,
    // private navParams: NavParams,
    private toast: ToastService,
    private modalCtrl: ModalController,
     private loadingService: LoadingService,
    private dataService:DataService
  ) { 
 this.loadingService.presentLoading();
 // this.storage.get('packs').then((packages) => {
      this.dataService.getRequest("packages").subscribe((packages)=>{
               console.log(packages);
               this.loadingService.dismissLoading();
                           let len=Object.keys(packages).length;
                            for (var i = 0; i < len; i++) {
                              let thispackage=packages[i]
                              if(thispackage.type==="digitize"){
                                 let normal:any=[];
                                 let hurry;
                                for (var x = 0; x < thispackage.prices.length; x++) {
                                    let sel= thispackage.prices[x];
                                  console.log(sel);
                                  if(sel.type==="normal"){
                                      normal.push(sel);
                                  }
                                  else{
                                    hurry=sel;
                                  }
                                  // elseif(){

                                  // }

                                }
                                this.prices=normal;
                                this.rush=hurry;


                                // grouped = mapValues(groupBy(thispackage, 'type'),
                                //                 clist => clist.map(thispackage => _.omit(thispackage, 'type')));


                              }
                            }

                            console.log(this.prices);
                            console.log(this.rush);


             },(err)=>{
                      //console.log(e);
                      console.log(err);
                       this.dataService.getRequest("packages").subscribe((packages)=>{
                            console.log(packages);
                           let len=Object.keys(packages).length;
                            for (var i = 0; i < len; i++) {
                              let thispackage=packages[i]
                              if(thispackage.type==="digitize"){
                                 let normal:any=[];
                                 let hurry;
                                for (var x = 0; x < thispackage.prices.length; x++) {
                                    let sel= thispackage.prices[x];
                                  console.log(sel);
                                  if(sel.type==="normal"){
                                      normal.push(sel);
                                  }
                                  else{
                                    hurry=sel;
                                  }
                                  // elseif(){

                                  // }

                                }
                                this.prices=normal;
                                this.rush=hurry;


                                // grouped = mapValues(groupBy(thispackage, 'type'),
                                //                 clist => clist.map(thispackage => _.omit(thispackage, 'type')));


                              }
                            }

                            console.log(this.prices);
                            console.log(this.rush);
     // this.prices=grouped.vector;
      
   //let package=packages;


  //this.prices=price.prices;

});
                      // this.loadingService.dismissLoading();
         this.toast.presentToast('Network error,check your connection and try again','danger');
         this.navCtrl.navigateForward('/menu/tabs/tabs/home');
                    });



  }

  ngOnInit() {

    
  }
 scrollTo(element:string) {
//    let yOffset = document.getElementById(element).offsetTop;
    let yOffset = this.elementRef.nativeElement.querySelector(element).offsetTop;
    this.content.scrollToPoint(0, yOffset, 1000)
  }

  goBack() {
    this.navCtrl.navigateBack('/menu/tabs/tabs/home');
  }
    onChange($event) {
     this.vectorObj.amount = +$event;
  }

  placeOrder() {
    if (this.vectorObj.price !== '' && this.vectorObj.scheme !== '' && this.vectorObj.fileFormat !== '' && this.vectorObj.artwork !== '') {
      this.isError = false;
      this.vectorObj.amount = parseInt(this.vectorObj.price, 10);
      if (this.vectorObj.isUrgent) {
        this.vectorObj.amount += 10;
      }
      //this.storage.set('PACKAGE', this.vectorObj);
      this.openModal(ImageSelectionPage,this.vectorObj);
    } else {
      this.isError = true;
      let errors:any =[];

      let offset = null;
      if (this.vectorObj.fileFormat === '') {
        errors.push("fileFormat  is required")
        offset = this.elementRef.nativeElement.querySelector('#fileFormat').offsetTop;
        this.scrollTo("#fileFormat");
        //this.toast.presentToast('fileFormat  is required', 'danger');
      }
      if (this.vectorObj.scheme === '') {
        errors.push("scheme  is required")
        offset = this.elementRef.nativeElement.querySelector('#scheme').offsetTop;
        this.scrollTo("#scheme");
        //this.toast.presentToast('scheme  is required', 'danger');
      }
      if (this.vectorObj.artwork === '') {
        errors.push("artwork  is required")
        offset = this.elementRef.nativeElement.querySelector('#artwork').offsetTop;
         this.scrollTo("#artwork");
         //this.toast.presentToast('artwork  is required', 'danger');
      }
      if (this.vectorObj.price === '') {
        errors.push("price  is required")
        offset = this.elementRef.nativeElement.querySelector('#price').offsetTop;
        this.scrollTo("#price");
         //this.toast.presentToast('price  is required', 'danger');
      }
      // console.log(errors);
      let len=Object.keys(errors).length;

      if (len!==1) {
         this.toast.presentToast('Select All required details', 'danger');
      }
      else{

       this.toast.presentToast(errors[0], 'danger');
      }
      // else{
      // this.content.scrollToTop();
      // // this.toast.presentToast('Select All required details', 'danger');
      // }
     
    }
  }

  updateLogoTypePrice($event) {
   let price = +$event;
      console.log(price);
   //let price= parseInt(amount , 10);

  //console.log(price);

    if (price === 35 || price === 45) {
      console.log(price);
      //this.vectorObj.isUrgent = false;
      //this.isRushdisabled = true;
    } else {
      //this.isRushdisabled = false;
    }
    // if (price === '') {
    //   if (this.vectorObj.isUrgent) {
    //     this.vectorObj.amount = 10;
    //   } else {
    //     this.vectorObj.amount = 0;
    //   }

    //   return;
    // }
    if (this.vectorObj.isUrgent) {
      // this.vectorObj.amount = parseInt(price, 10) + 10;
       this.vectorObj.amount = price + this.rush.value;
    } else {
      this.vectorObj.amount = price;
    }

  }
  updatePriceForUrgent() {
    if (this.vectorObj.isUrgent) {
      if (this.vectorObj.price) {
        this.vectorObj.amount = parseInt(this.vectorObj.price, 10) + this.rush.value;
      } else {
        this.vectorObj.amount = this.rush.value;

      }
    } else {
      if (this.vectorObj.price) {
        this.vectorObj.amount = parseInt(this.vectorObj.price, 10);
      } else {
        this.vectorObj.amount = 0;
      }
    }

  }

  toggleSection() {
    this.fileListOpen = !this.fileListOpen;
    this.scrollTo("#fileFormat");

  }

  async openModal(component: any,data:any) {
    const modal = await this.modalCtrl.create({
      component,
         componentProps: {
         "data": data,
       // "paramTitle": "Test Title"
      }

    });
    return await modal.present();

  }

}
