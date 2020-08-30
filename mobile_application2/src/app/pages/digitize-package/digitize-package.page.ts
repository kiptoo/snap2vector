import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { StorageService } from 'src/app/providers/storage.service';
import { IonContent, ModalController, NavController } from '@ionic/angular';
import { ImageSelectionPage } from '../image-selection/image-selection.page';
import { ToastService } from 'src/app/providers/toast.service';
import { DataService } from 'src/app/providers/data.service';
import { LoadingService } from 'src/app/providers/loading.service';

@Component({
  selector: 'app-digitize-package',
  templateUrl: './digitize-package.page.html',
  styleUrls: ['./digitize-package.page.scss'],
})
export class DigitizePackagePage implements OnInit {

  @ViewChild(IonContent) content: IonContent;
  prices: any;
  rush: any=0;
  garmentTypes: Array<any> = [
    { name: 'Flat - All flat items - Shirts, bags etc', checked: false },
    { name: 'Caps - all hats', checked: false },
    { name: 'Beanies', checked: false }];
  trims: Array<any> = [
    { name: 'Cut thread longer than 2mm', checked: false },
    { name: 'Cut all connections threads', checked: false },
    { name: 'Do not cut - never trim', checked: false }];


  digitizeObj = {
    type: 'Snap to Digitize',
   // poNumber: '',
    size: '',
    sizeValue: '',
    price: '',
    isUrgent: false,
    fileFormat: '',
    instructions: '',
    garmentTypes: [],
    trims: [],
    amount: 0
  }
  isRushdisabled = false;
  fileListOpen = false;
  isError = false;

  constructor(
    private storage: StorageService,
    private elementRef: ElementRef,
    private modalCtrl: ModalController,
    private toast: ToastService,
    private loadingService: LoadingService,
    // private navParams: NavParams,
    private dataService:DataService,
    private navCtrl: NavController
  ) { 
 this.loadingService.presentLoading();

         // this.storage.get('packages', packages).catch((e) =>{
            this.dataService.getRequest("packages").subscribe((packages)=>{
          //   this.storage.get('packs').then((packages) => {
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

  onChange($event) {
     this.digitizeObj.amount = +$event;
  }
   scrollTo(element:string) {
//    let yOffset = document.getElementById(element).offsetTop;
    let yOffset = this.elementRef.nativeElement.querySelector(element).offsetTop;
    this.content.scrollToPoint(0, yOffset, 1000);
  }

  placeOrder() {
    this.digitizeObj.garmentTypes = this.garmentTypes.filter(type => {
      return type.checked === true;
    });

    this.digitizeObj.trims = this.trims.filter(trim => {
      return trim.checked === true;
    });

    if (
      this.digitizeObj.price !== '' &&
      this.digitizeObj.sizeValue !== '' &&
      this.digitizeObj.size !== '' &&
      this.digitizeObj.fileFormat !== '' &&
     // this.digitizeObj.poNumber !== '' &&
      this.digitizeObj.garmentTypes.length &&
      this.digitizeObj.trims.length
    ) {
      this.isError = false;
      this.digitizeObj.amount = parseInt(this.digitizeObj.price, 10);
      if (this.digitizeObj.isUrgent) {
        this.digitizeObj.amount += 10;
      }
    //  this.storage.set('PACKAGE', this.digitizeObj);
      this.openModal(ImageSelectionPage,this.digitizeObj);
    } else {
      this.isError = true;
      let errors:any =[];

      let offset = null;
      if (this.digitizeObj.trims.length === 0) {
        offset = this.elementRef.nativeElement.querySelector('#trims').offsetTop;
         this.scrollTo("#trims");
         //this.toast.presentToast('trims  is required', 'danger');
      }
      if (this.digitizeObj.garmentTypes.length === 0) {
        offset = this.elementRef.nativeElement.querySelector('#garmentTypes').offsetTop;
        this.scrollTo("#garmentTypes");
        //this.toast.presentToast('garmentTypes  is required', 'danger');
      }
      if (this.digitizeObj.fileFormat === '') {
        offset = this.elementRef.nativeElement.querySelector('#fileFormat').offsetTop;
        this.scrollTo("#fileFormat");
        //this.toast.presentToast('fileFormat  is required', 'danger');
      }
      if (this.digitizeObj.price === '') {
        offset = this.elementRef.nativeElement.querySelector('#price').offsetTop;
        this.scrollTo("#price");
        //this.toast.presentToast('price  is required', 'danger');
      }
      if (this.digitizeObj.size === '') {
        offset = this.elementRef.nativeElement.querySelector('#size').offsetTop;
        this.scrollTo("#size");
       // this.toast.presentToast('size  is required', 'danger');
      }
      // console.log(errors);
      let len=Object.keys(errors).length;

      if (len!==1) {
         this.toast.presentToast('Select All required details', 'danger');
      }
      else{

       this.toast.presentToast(errors[0], 'danger');
      }
      // if (this.digitizeObj.poNumber === '') {
      //   offset = this.elementRef.nativeElement.querySelector('#poNumber').offsetTop;
      // }
     //  else{
     //  this.content.scrollToTop();
     // // this.toast.presentToast('Select All required details', 'danger');
     //   }
      
    }
  }
  updateLogoTypePrice($event) {
   // this.amount = +$event;
    //console.log(+$event);
  // price = parseInt(price, 10)
   let price = +$event;
      console.log(price);
    if (price !== 15) {
      
     // this.digitizeObj.isUrgent = false;
      //this.isRushdisabled = true;
    } else {
      //this.isRushdisabled = false;
    }

    // if (price === '') {
    //   if (this.digitizeObj.isUrgent) {
    //     this.digitizeObj.amount = 10;
    //   } else {
    //     this.digitizeObj.amount = 0;
    //   }

    //   return;
    // }
    if (this.digitizeObj.isUrgent) {
      //this.digitizeObj.amount = parseInt(price, 10) + 10;
      this.digitizeObj.amount = price+ 10;
    } else {
      this.digitizeObj.amount = price;
    }

  }
  updatePriceForUrgent() {
    if (this.digitizeObj.isUrgent) {
      if (this.digitizeObj.price) {
        this.digitizeObj.amount = parseInt(this.digitizeObj.price, 10) + 10;
      } else {
        this.digitizeObj.amount = 10;
      }
    } else {
      if (this.digitizeObj.price) {
        this.digitizeObj.amount = parseInt(this.digitizeObj.price, 10);
      } else {
        this.digitizeObj.amount = 0;
      }
    }

  }


  toggleSection() {
    this.fileListOpen = !this.fileListOpen;
     this.scrollTo("#fileFormat");

  }

  garmentChangeEvent() {
    this.digitizeObj.garmentTypes = this.garmentTypes.filter(type => {

      return type.checked === true;
    });
  }

  trimsChangeEvent() {
    this.digitizeObj.trims = this.trims.filter(trim => {

      return trim.checked === true;
    });
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

  goBack() {
    this.navCtrl.navigateBack('/menu/tabs/tabs/home');
  }


}
